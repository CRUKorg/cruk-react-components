# Radio buttons group

Radio buttons alow users to select one of a number of options.

### Example

```.jsx

function () {
  const [selectedEmail, setSelectedEmail] = React.useState('yes');
  const [selectedPhone, setSelectedPhone] = React.useState('no');

  return (
    <>
      <RadioGroup
        legend="Email"
        name="email"
        onChange={e => setSelectedEmail(e.target.value)}
        attributes= {[{option: 'Yes', value: 'yes'},{option: 'No', value: 'no'}]}
        checked={selectedEmail}
      />

      <RadioGroup
        legend="Telephone"
        name="phone"
        onChange={e => setSelectedPhone(e.target.value)}
        attributes= {[{option: 'Yes', value: 'yes'},{option: 'No', value: 'no'}]}
        checked={selectedPhone}
      />
    </>
  )
}
```

## Props

| Name       | Type     | Options | Default | Description                                                                 |
| :--------- | :------- | :-----: | :------ | :-------------------------------------------------------------------------- |
| checked    | boolean  |         |         | Indicates whether or not the radio button is the currently selected         |
| name       | String   |         |         | Used to link radios together. Must be unique per page                       |
| onChange   | Function |         |         | Callback function called on input change                                    |
| value      | String   |         |         | Value to be returned and used as label if label prop is not supplied        |
| legend     | String   |         |         | This is the title of the radio group. (Only used in an inline radio group.) |
| attributes | Array    |         |         | It consists of option and value. (Only used in an inline radio group.)      |

## Notes

- Should the state be managed withing the component?
