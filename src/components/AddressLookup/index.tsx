import React, { FunctionComponent, InputHTMLAttributes, useCallback, useEffect, Ref, useRef, forwardRef } from 'react';
import { useTheme } from 'styled-components';

import defaultTheme from 'src/themes/cruk';
import ErrorText from 'src/components/ErrorText';
import Icon from 'src/components/Icon';
import TextField from 'src/components/TextField';
import Text from 'src/components/Text';
import debounce from 'src/utils/debounce';

import { ListWrapper, ListItem, ScreenReaderOnly, List } from './styles';

import { AddressDataType, AddressOptionsType } from 'src/types';

const FIND_URL = 'https://api.addressy.com/Capture/Interactive/Find/v1.1/json3.ws';
const RETRIEVE_URL = 'https://api.addressy.com/Capture/Interactive/Retrieve/v1/json3.ws';

export type AddressLookupProps = InputHTMLAttributes<HTMLInputElement> & {
  apiKey: string;
  countries?: string[];
  onAddressSelected: (address: AddressDataType) => void;
  error?: string;
  hasError?: boolean;
  isValid?: boolean;
  isValidVisible?: boolean;
  label?: string;
  onAddressError?: (error: Error) => void;
  ref?: Ref<HTMLInputElement>;
};

/**
 * This component creates a combobox for a user to type in a post code or partial address and be presented with a of verified addresses.

We use Loqate (formerly Addressy and Postcode Anywhere) API v3, we have looked at v4 but it is more expensive without many benefits for our use case.

You will need a Loqate api key, the examples below use "MG17-ZD93-FF33-KF13" our development key.

This component is generally only used for country codes including "GBR", "GGY", "IMN", "JEY". An example of this behavior is included bellow.
 */
const AddressLookup: FunctionComponent<AddressLookupProps> = forwardRef(
  (
    {
      apiKey,
      countries,
      error,
      hasError,
      isValid,
      isValidVisible,
      label,
      onAddressError = err => {},
      onAddressSelected,
      onChange,
      ...props
    }: AddressLookupProps,
    ref?: Ref<HTMLInputElement>,
  ) => {
    const [addressOptions, setAddressOptions] = React.useState<AddressOptionsType[]>([]);
    const [activeOption, setActiveOption] = React.useState(0);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const foundTheme = useTheme();
    const theme = {
      ...defaultTheme,
      ...foundTheme,
    };

    useEffect(() => {
      const handleEsc = (event: KeyboardEvent) => {
        if (event.keyCode === 27) clearOptions();
      };
      const handleClickOutside = (event: MouseEvent) => {
        if (wrapperRef.current && event.target instanceof HTMLElement && !wrapperRef.current.contains(event.target))
          clearOptions();
      };
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEsc, false);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEsc, false);
      };
    });

    const clearOptions = () => {
      setActiveOption(0);
      setAddressOptions([]);
    };

    const searchDebounced = useCallback(
      debounce(500, (query: string) => search(query)),
      [],
    );

    const search = (query: string, id = '') => {
      if (query.length === 0) return setAddressOptions([]);
      let searchUrl = `${FIND_URL}?Key=${apiKey}&Text=${query}&Container=${id}`;
      if (countries) {
        searchUrl = `${searchUrl}&Countries=${countries}`;
      }
      fetch(searchUrl)
        .then((res: Response) => {
          if (!res.ok) throw new Error('Something went wrong please try again');
          return res.json();
        })
        .then(data => {
          // Occasionally get the error "The query didn't respond fast enough, it may be too complex."
          // returned with a 200 response. Example query "n17 6t"
          if (data.Items[0].Error) throw new Error('Something went wrong please try again');
          setActiveOption(0);
          setAddressOptions(data.Items || []);
        })
        .catch(err => onAddressError(err));
    };

    const getAddress = (id: string) => {
      fetch(`${RETRIEVE_URL}?Key=${apiKey}&Id=${id}`)
        .then((res: Response) => {
          if (!res.ok) throw new Error('Something went wrong please try again');
          return res.json();
        })
        .then(data => {
          clearOptions();
          onAddressSelected(data.Items[0]);
        })
        .catch(err => onAddressError(err));
    };

    return (
      <>
        <TextField
          aria-activedescendant={addressOptions.length ? `addressOptions-${activeOption}` : ''}
          aria-owns="found_addresses"
          aria-autocomplete="both"
          aria-expanded={addressOptions.length ? 'true' : 'false'}
          autoComplete="off"
          hasError={hasError || !!error}
          hintText="Start typing your address or postcode"
          isValid={isValid}
          isValidVisible={isValidVisible}
          label={label ?? 'Home address'}
          ref={ref}
          required
          role="combobox"
          type="search"
          {...props}
          onKeyDown={e => {
            if (e.keyCode === 13 && addressOptions[activeOption]) {
              e.preventDefault();
              if (addressOptions[activeOption].Type === 'Address') return getAddress(addressOptions[activeOption].Id);
              search(addressOptions[activeOption].Text, addressOptions[activeOption].Id);
            } else if (e.keyCode === 38) {
              e.preventDefault();
              if (activeOption <= 0) return setActiveOption(addressOptions.length - 1);
              setActiveOption(activeOption - 1);
            } else if (e.keyCode === 40) {
              e.preventDefault();
              if (activeOption + 1 >= addressOptions.length) return setActiveOption(0);
              setActiveOption(activeOption + 1);
            }
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            searchDebounced(e.target.value);
            if (onChange) onChange(e);
          }}
        />
        <ScreenReaderOnly role="status" aria-live="assertive">
          {!!addressOptions.length &&
            `We have found ${addressOptions.length} result${addressOptions.length !== 1 &&
              's'} matching your search. Use up and down arrow keys to navigate`}
        </ScreenReaderOnly>
        {!!addressOptions.length && (
          <ListWrapper ref={wrapperRef}>
            <List aria-label="found addresses" id="found_addresses" role="listbox" theme={theme}>
              {addressOptions.map((address, index) => (
                <ListItem
                  id={`addressOptions-${index}`}
                  isActive={index === activeOption}
                  key={address.Id}
                  onClick={() => {
                    if (address.Type === 'Address') return getAddress(address.Id);
                    search(address.Text, address.Id);
                  }}
                  role="option"
                  theme={theme}
                >
                  <Text as="span">
                    {address.Text} {address.Description}
                  </Text>
                  {address.Type !== 'Address' && <Icon name="chevronRight" />}
                </ListItem>
              ))}
            </List>
          </ListWrapper>
        )}
        {error && <ErrorText>{error}</ErrorText>}
      </>
    );
  },
);

export default AddressLookup;
