import React, {
  FunctionComponent,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  Ref,
  useRef,
  forwardRef,
  FocusEvent,
  ChangeEvent,
  KeyboardEvent,
  useState,
} from "react";
import { useTheme } from "styled-components";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { AddressDataType, AddressOptionsType } from "../../types";
import { useKey } from "../../hooks/useKey";

import debounce from "../../utils/debounce";
import Text from "../Text";
import TextField from "../TextField";
import IconFa from "../IconFa";
import defaultTheme from "../../themes/cruk";

import { ListWrapper, ListItem, ScreenReaderOnly, List } from "./styles";

const FIND_URL =
  "https://api.addressy.com/Capture/Interactive/Find/v1.1/json3.ws";
const RETRIEVE_URL =
  "https://api.addressy.com/Capture/Interactive/Retrieve/v1/json3.ws";

export type AddressLookupProps = InputHTMLAttributes<HTMLInputElement> & {
  /** api key for loqate */
  apiKey: string;
  /** list of countries codes you want the address look up to search within */
  countries?: string[];
  /** callback function which is passed the selected address data */
  onAddressSelected: (address: AddressDataType) => void;
  /** error message */
  errorMessage?: string;
  /** when true a input has a red border */
  hasError?: boolean;
  /** flag which effects the check or cross icons to the right of the input */
  isValid?: boolean;
  /** flag to hide or show the check icon when valid */
  isValidVisible?: boolean;
  /** flag to hide or show the cross icon when invalid */
  isInvalidVisible?: boolean;
  /** label text */
  label?: string;
  /** callback function which is passed the error */
  onAddressError?: (error: Error) => void;
  /** onBlur handler */
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  /** attach a DOM reference variable to your component */
  ref?: Ref<HTMLInputElement>;
};

/**
 * This component creates a combobox for a user to type in a post code or partial address and be presented with a of verified addresses.
 * We use Loqate (formerly Addressy and Postcode Anywhere) API v3, we have looked at v4 but it is more expensive without many benefits for our use case.
 * You will need a Loqate api key, the examples below use "MG17-ZD93-FF33-KF13" our development key.
 * This component is generally only used for country codes including "GBR", "GGY", "IMN", "JEY". An example of this behavior is included bellow.
 */
const AddressLookup: FunctionComponent<AddressLookupProps> = forwardRef(
  (
    {
      apiKey,
      countries,
      errorMessage,
      hasError,
      isValid,
      isValidVisible,
      isInvalidVisible,
      label,
      onAddressError = (err) => {},
      onAddressSelected,
      onChange,
      onBlur,
      ...props
    }: AddressLookupProps,
    ref?: Ref<HTMLInputElement>
  ) => {
    const [addressOptions, setAddressOptions] = useState<AddressOptionsType[]>(
      []
    );
    const [activeOption, setActiveOption] = useState(-1);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const foundTheme = useTheme();
    const theme = {
      ...defaultTheme,
      ...foundTheme,
    };

    const clearOptions = () => {
      setActiveOption(-1);
      setAddressOptions([]);
    };

    const searchDebounced = useCallback(
      debounce(500, (query: string) => search(query)),
      []
    );

    const search = (query: string, id = "") => {
      if (query.length === 0) return setAddressOptions([]);
      let searchUrl = `${FIND_URL}?Key=${apiKey}&Text=${query}&Container=${id}`;
      if (countries !== undefined) {
        searchUrl = `${searchUrl}&Countries=${countries.join(",")}`;
      }
      fetch(searchUrl)
        .then((res: Response) => {
          if (!res.ok) throw new Error("Something went wrong please try again");
          return res.json();
        })
        .then((data: { Items: AddressOptionsType[] }) => {
          // Occasionally get the error "The query didn't respond fast enough, it may be too complex."
          // returned with a 200 response. Example query "n17 6t"
          if (data.Items[0].Error)
            throw new Error("Something went wrong please try again");
          setAddressOptions(data.Items || []);
          return null;
        })
        .catch((err) => onAddressError(err));
      return null;
    };

    const getAddress = (id: string) => {
      fetch(`${RETRIEVE_URL}?Key=${apiKey}&Id=${id}`)
        .then((res: Response) => {
          if (!res.ok) throw new Error("Something went wrong please try again");
          return res.json();
        })
        .then((data: { Items: AddressDataType[] }) => {
          clearOptions();
          onAddressSelected(data.Items[0]);
          return null;
        })
        .catch((err) => onAddressError(err));
    };

    const selectAddress = (address: AddressOptionsType) => {
      if (address.Type === "Address") return getAddress(address.Id);
      search(address.Text, address.Id);
      return null;
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
      if (e.key === "Enter" && addressOptions[activeOption]) {
        e.preventDefault();
        if (addressOptions[activeOption].Type === "Address")
          getAddress(addressOptions[activeOption].Id);
        search(
          addressOptions[activeOption].Text,
          addressOptions[activeOption].Id
        );
        setActiveOption(-1);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (activeOption <= -1) setActiveOption(addressOptions.length - 1);
        setActiveOption(activeOption - 1);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (activeOption + 1 >= addressOptions.length) setActiveOption(0);
        setActiveOption(activeOption + 1);
      } else {
        setActiveOption(-1);
      }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      searchDebounced(e.target.value);
      if (onChange) onChange(e);
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
      const isOptionsOpen = !!addressOptions.length;
      if (onBlur && !isOptionsOpen) onBlur(e);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        event.target instanceof HTMLElement &&
        !wrapperRef.current.contains(event.target)
      )
        clearOptions();
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    });

    useKey(
      () => {
        clearOptions();
      },
      {
        detectKeys: ["Escape", "Tab"],
      },
      []
    );

    return (
      <>
        <TextField
          aria-activedescendant={
            addressOptions.length ? `addressOptions-${activeOption}` : ""
          }
          aria-owns="found_addresses"
          aria-autocomplete="both"
          aria-expanded={addressOptions.length ? "true" : "false"}
          autoComplete="off"
          hasError={hasError || !!errorMessage}
          errorMessage={errorMessage}
          hintText="Start typing your address or postcode"
          isValid={isValid}
          isValidVisible={isValidVisible}
          isInvalidVisible={isInvalidVisible}
          label={label ?? "Home address"}
          ref={ref}
          required
          role="combobox"
          type="search"
          {...props}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {!!addressOptions.length && (
          <>
            <ScreenReaderOnly role="status" aria-live="assertive">
              {!!addressOptions.length &&
                `We have found ${addressOptions.length} result${
                  addressOptions.length !== 1 ? "s" : ""
                } matching your search. Use up and down arrow keys to navigate`}
            </ScreenReaderOnly>
            <ListWrapper ref={wrapperRef}>
              <List
                aria-label="found addresses"
                id="found_addresses"
                role="listbox"
                theme={theme}
              >
                {addressOptions.map((address, index) => (
                  <ListItem
                    tabIndex={0}
                    id={`addressOptions-${index}`}
                    isActive={index === activeOption}
                    key={address.Id}
                    onClick={() => {
                      selectAddress(address);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        selectAddress(address);
                      }
                    }}
                    role="option"
                    data-hj-suppress
                    theme={theme}
                  >
                    <Text as="span" data-hj-suppress>
                      {address.Text} {address.Description}
                    </Text>
                    {address.Type !== "Address" && (
                      <>
                        <ScreenReaderOnly>
                          press enter for these addresses
                        </ScreenReaderOnly>
                        <IconFa faIcon={faChevronRight} />
                      </>
                    )}
                  </ListItem>
                ))}
              </List>
            </ListWrapper>
          </>
        )}
      </>
    );
  }
);

export default AddressLookup;
