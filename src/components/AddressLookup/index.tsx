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

const ListItem = styled.li<{isActive: boolean}>`
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

type AddressLookupProps = {
  error: boolean;
  onAddressSelected: Function;
  onChange: Function;
  pcaKey: string;
};

const AddressLookup: FunctionComponent<AddressLookupProps> = ({onAddressSelected, pcaKey, error, ...props}) => {
  const [addresses, setAddresses] = React.useState([]);
  const [activeOption, setActiveOption] = React.useState(0);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.keyCode === 27) clearOptions();
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) clearOptions();
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
    setAddresses([]);
  };

  const debounced = (delay: number, callback: Function) => {
    let timerId: number;
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

  const searchDebounced = useCallback(debounced(500, (query: string) => search(query)), []);

  const search = (query: string, id = '') => {
    if (query.length === 0) return setAddresses([]);
    fetch(`https://api.addressy.com/Capture/Interactive/Find/v1.1/json3.ws?Key=${pcaKey}&Text=${query}&Container=${id}`)
      .then((res: Response) => {
        if (!res.ok) {
          throw new Error('Log out failed');
        }
        return res.json();
      })
      .then(data => {
        // TODO occasionally get the error "The query didn't respond fast enough, it may be too complex." 
        // "n17 6t" returns as a 200 with error
        if (data.Items[0].Error) return console.log('Error', data.Items[0])
        setActiveOption(0);
        setAddresses(data.Items || []);
      })
      .catch(err => console.error('Error', err));

    // findAddresses(pcaKey, { Text: query, Container: id })
    //   .then(data => {
    //     // TODO occasionally get the error "The query didn't respond fast enough, it may be too complex." 
    //     // "n17 6t" returns as a 200 with error
    //     if (data.Items[0].Error) return console.log('Error', data.Items[0])
    //     setActiveOption(0);
    //     setAddresses(data.Items || []);
    //   })
    //   .catch(err => console.log('Error', err));
  };

  const getAddress = (query: string) => {
    // retrieveAddress(pcaKey, { Id: query})
    //   .then(data => {
    //     clearOptions();
    //     onAddressSelected(data.Items[0]);
    //   })
    //   .catch(err => console.log('Error', err));
  };

  return (
    <React.Fragment>
      <TextField
        role="combobox"
        aria-autocomplete="both"
        label="Home address"
        name="address.line1"
        required
        hintText="Start typing your address or postcode"
        aria-activedescendant={`addressOptions-${activeOption}`}
        {...props}
        hasError={!!error}
        onKeyDown={e => {
          if (e.keyCode === 13) {
            e.preventDefault();
            if (addresses[activeOption].Type === 'Address') return getAddress(addresses[activeOption].Id);
            search(addresses[activeOption].Text, addresses[activeOption].Id);
          } else if (e.keyCode === 38) {
            e.preventDefault();
            if (activeOption <= 0) return setActiveOption(addresses.length - 1);
            setActiveOption(activeOption - 1);
          } else if (e.keyCode === 40) {
            e.preventDefault();
            if (activeOption + 1 >= addresses.length) return setActiveOption(0);
            setActiveOption(activeOption + 1);
          }
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          searchDebounced(e.target.value);
          props.onChange(e);
        }}
      />
      <ScreenReaderOnly role="status" aria-live="assertive">
        {!!addresses.length &&
          `We have found ${addresses.length} result${addresses.length !== 1 && "s"} matching your search. Use up and down arrow keys to navigate`}
      </ScreenReaderOnly>
      {!!addresses.length && (
        <ListWrapper ref={wrapperRef}>
          <List role="listbox">
            {addresses.map((address, index) => (
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
