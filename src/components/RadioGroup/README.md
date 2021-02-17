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
        selectedValue={selectedEmail}
      />

      <RadioGroup
        legend="Telephone"
        name="phone"
        onChange={e => setSelectedPhone(e.target.value)}
        attributes= {[{option: 'Yes', value: 'yes'},{option: 'No', value: 'no'}]}
        selectedValue={selectedPhone}
      />
    </>
  )
}
```

## Props

| Name          | Type                                   | Options | Default | Description                                                                                  |
| :------------ | :------------------------------------- | :-----: | :------ | :------------------------------------------------------------------------------------------- |
| legend        | String                                 |         |         | This is the title of the radio group                                                         |
| name          | String                                 |         |         | Used to link radios together. Must be unique per page                                        |
| attributes    | Array<{option: string, value: string}> |         |         | This builds the RadioGroup from an array of objects containing an the option title and value |
| selectedValue | string                                 |         |         | The value of the radio that is selected                                                      |
| onChange      | Function                               |         |         | Callback function called on input change                                                     |
