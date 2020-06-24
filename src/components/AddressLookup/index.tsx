import React, { FunctionComponent, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../themes/cruk';
import Icon from '../Icon';
import ErrorText from '../ErrorText';
import TextField from '../TextField';

const ListWrapper = styled.div`
  position: relative;
`;

const List = styled.ul`
  background-color: ${COLORS.backgroundLight};
  border-radius: 3px;
  border: 2px solid #ccc;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  list-style: none;
  margin-top: 0;
  max-height: 400px;
  overflow-y: auto;
  padding: 0;
  position: absolute;
  width: 100%;
  z-index: 999;
`;

const ListItem = styled.li<{ isActive: boolean }>`
  align-items: center;
  background-color: ${props => (props.isActive ? COLORS.backgroundMid : COLORS.backgroundLight)};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  &:hover,
  &:focus {
    background-color: #ddd;
  }
`;

// TODO move to its own component
const ScreenReaderOnly = styled.div`
  border: 0px;
  clip: rect(0px, 0px, 0px, 0px);
  height: 1px;
  margin-bottom: -1px;
  margin-right: -1px;
  overflow: hidden;
  padding: 0px;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

type AddressData = {
  Line1: string;
  Line2: string;
  Line3: string;
  City: string;
  PostalCode: string;
};

type AddressOptions = {
  Description: string;
  Type: string;
  Id: string;
  Text: string;
}

type AddressLookupProps = {
  apiKey: string;
  error?: string;
  hasError?: boolean;
  onAddressSelected: (address: AddressData) => void;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const AddressLookup: FunctionComponent<AddressLookupProps> = ({
  apiKey,
  error,
  hasError,
  onAddressSelected,
  onChange,
  ...props
}) => {
  const FIND_URL = 'https://api.addressy.com/Capture/Interactive/Find/v1.1/json3.ws';
  const RETRIEVE_URL = 'https://api.addressy.com/Capture/Interactive/Retrieve/v1/json3.ws';
  const [addressOptions, setAddressOptions] = React.useState<AddressOptions[]>([]);
  const [activeOption, setActiveOption] = React.useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.keyCode === 27) clearOptions();
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current &&  event.target instanceof HTMLElement && !wrapperRef.current.contains(event.target)) clearOptions();
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

  const debounced = (delay: number, callback: Function) => {
    let timerId: number | null;
    return (...args: any[]) => {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        callback(...args);
        timerId = null;
      }, delay);
    };
  };

  const searchDebounced = useCallback(
    debounced(500, (query: string) => search(query)),
    [],
  );

  const search = (query: string, id = '') => {
    if (query.length === 0) return setAddressOptions([]);
    fetch(`${FIND_URL}?Key=${apiKey}&Text=${query}&Container=${id}`)
      .then((res: Response) => {
        if (!res.ok) {
          console.log('Error', 'Something went wrong please try again');
        }
        return res.json();
      })
      .then(data => {
        // Occasionally get the error "The query didn't respond fast enough, it may be too complex."
        // returned with a 200 response. Example query "n17 6t"
        if (data.Items[0].Error) return console.error(data.Items[0]);
        setActiveOption(0);
        setAddressOptions(data.Items || []);
      })
      .catch(err => console.error(err));
  };

  const getAddress = (id: string) => {
    fetch(`${RETRIEVE_URL}?Key=${apiKey}&Id=${id}`)
      .then((res: Response) => {
        if (!res.ok) {
          console.error('Something went wrong please try again');
        }
        return res.json();
      })
      .then(data => {
        clearOptions();
        onAddressSelected(data.Items[0]);
      })
      .catch(err => console.error(err));
  };

  return (
    <React.Fragment>
      <TextField
        aria-activedescendant={`addressOptions-${activeOption}`}
        aria-autocomplete="both"
        hasError={hasError || !!error}
        hintText="Start typing your address or postcode"
        label="Home address"
        required
        role="combobox"
        {...props}
        onKeyDown={e => {
          if (e.keyCode === 13) {
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
          onChange(e);
        }}
      />
      <ScreenReaderOnly role="status" aria-live="assertive">
        {!!addressOptions.length &&
          `We have found ${addressOptions.length} result${addressOptions.length !== 1 &&
            's'} matching your search. Use up and down arrow keys to navigate`}
      </ScreenReaderOnly>
      {!!addressOptions.length && (
        <ListWrapper ref={wrapperRef}>
          <List role="listbox">
            {addressOptions.map((address, index) => (
              <ListItem
                id={`addressOptions-${index}`}
                isActive={index === activeOption}
                key={address.Id}
                role="option"
                onClick={() => {
                  if (address.Type === 'Address') return getAddress(address.Id);
                  search(address.Text, address.Id);
                }}
              >
                <div>
                  {address.Text} {address.Description}
                </div>
                {address.Type !== 'Address' && <Icon name="chevronRight" />}
              </ListItem>
            ))}
          </List>
        </ListWrapper>
      )}
      {error && <ErrorText>{error}</ErrorText>}
    </React.Fragment>
  );
};

export default AddressLookup;
