# Address lookup

This component creates a combobox for a user to type in a post code or partial address and be presented with a of verified addresses.

We use Loqate (formerly Addressy and Postcode Anywhere) API v3, we have looked at v4 but it is more expensive without many benefits for our use case.

You will need a Loqate api key, the examples below use "MG17-ZD93-FF33-KF13" our development key.

### Try it out

```.jsx
function () {
  const [validated, setValidated] = React.useState(false);
  const [line1, setLine1] = React.useState('');
  const [line2, setLine2] = React.useState('');
  const [line3, setLine3] = React.useState('');
  const [city, setCity] = React.useState('');
  const [postalCode, setPostalCode] = React.useState('');
  
  const handleAddressSelected = (address) => {
    setValidated(true);
    setLine1(address.Line1);
    setLine2(address.Line2);
    setLine3(address.Line3);
    setCity(address.City);
    setPostalCode(address.PostalCode);
  }

  return (
    <>
      <Box>
        <AddressLookup
          apiKey="MG17-ZD93-FF33-KF13"
          onAddressSelected={(address) => alert(JSON.stringify(address, null, 2))}
          onChange={(e) => console.log('value', e.target.value)}
        />
      </Box>

      <fieldset>
        <legend>Your Address</legend>
        <p>Example wired up to a simple form, with controlled inputs. For production use we recomend using useing Formic and Yup for form management and validation</p>
        <Box>
          <AddressLookup
            apiKey="MG17-ZD93-FF33-KF13"
            onAddressSelected={handleAddressSelected}
            onChange={(e) => {
              setValidated(false);
              setLine1(e.target.value)}
            }
            value={line1}
          />
        </Box>
        <Box>
          <TextField
            onChange={e => {
              setValidated(false);
              setLine2(e.target.value);
            }}
            label="Address line 2"
            value={line2}
          />
        </Box>
        <Box>
          <TextField
            onChange={e => {
              setValidated(false);
              setLine3(e.target.value);
            }}
            label="Address line 3"
            value={line3}
          />
        </Box>
        <Box>
          <TextField
            onChange={e => {
              setValidated(false);
              setCity(e.target.value);
            }}
            label="City"
            value={city}
            required
          />
        <Box>
        </Box>
          <TextField
            onChange={e => {
              setValidated(false);
              setPostalCode(e.target.value);
            }}
            label="Postcode"
            value={postalCode}
            required
          />
        </Box>
        <pre>{JSON.stringify({validated}, null, 2)}</pre>
      </fieldset>
    </>
  );
}
```

## Props

| Name | Type | Options | Default | Description |
| :- | :- | :-: | :- | :- |
| apiKey | String |  |  | Loqate API key |
| error | String |  |  | Error message text |
| hasError | Boolean |  | false | If true, use error styling for the input |
| onAddressSelected | Function | | | Returns address object |
| onChange | Function | |  | Callback function called on input change|

## Accessibility

- Responds to keyboard events
- Informs screen reader users of the presence of results returned from search

