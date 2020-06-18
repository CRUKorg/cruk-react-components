# Address lookup

Some info here

### Try them out

```.jsx

function () {
  const [validated, setValidated] = React.useState(false);
  const [line1, setLine1] = React.useState('');
  const [line2, setLine2] = React.useState('');
  const [line3, setLine3] = React.useState('');
  const [city, setCity] = React.useState('');
  const [postalCode, setPostalCode] = React.useState('');
  
  const handleAddressSelected = (address) => {
    console.log("address", address);
    console.log("addressline1", address.Line1);
    setValidated(true);
    setLine1(address.Line1);
    setLine2(address.Line2);
    setLine3(address.Line3);
    setCity(address.City);
    setPostalCode(address.PostalCode);
  }
  

  return (
    <>
      <AddressLookup
        pcaKey="MG17-ZD93-FF33-KF13"
        onAddressSelected={(address) => alert(JSON.stringify(address, null, 2))}
        onChange={(e) => console.log('value = ', e.target.value)}
      />

      <fieldset>
        <legend>Your Address</legend>
        Example wired up to a simple form, with controlled inputs.       <AddressLookup
          pcaKey="MG17-ZD93-FF33-KF13"
          onAddressSelected={handleAddressSelected}
          onChange={(e) => {
            setValidated(false);
            setLine1(e.target.value)}
          }
          value={line1}
        />
        <TextField
          onChange={e => {
            setValidated(false);
            setLine2(e.target.value);
          }}
          label="Address line 2"
          value={line2}
        />
        <TextField
          onChange={e => {
            setValidated(false);
            setLine3(e.target.value);
          }}
          label="Address line 3"
          value={line3}
        />
        <TextField
          onChange={e => {
            setValidated(false);
            setCity(e.target.value);
          }}
          label="City"
          name="address.city"
          value={city}
          required
        />
        <TextField
          onChange={e => {
            setValidated(false);
            setPostalCode(e.target.value);
          }}
          label="Postcode"
          value={postalCode}
          required
        />
        <pre>{JSON.stringify({validated}, null, 2)}</pre>
      </fieldset>
    </>
  );
}
```

## Props

| Name | Type | Options | Default | Description |
| :- | :- | :-: | :- | :- |
| onAddressSelected | Function | | | Returns address object |
| onChange | Function | |  | Callback function called on input change|
| pcaKey | String |  |  | Postcode anywhere key |

## Usage


