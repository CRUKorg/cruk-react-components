# RadioConsent

RadioConsent is a component for showing a bunch of yes/no radios predominantly used for notification selections where a unselected state is usefull for analytics.
This is always a controlled component that will only change state with the selectedValue prop

### Example

```.jsx

function () {
  const [selectedEmail, setSelectedEmail] = React.useState('yes');
  const [selectedPhone, setSelectedPhone] = React.useState('no');

  return (
    <>
      <RadioConsent
        legend="Email"
        name="email"
        onChange={e => setSelectedEmail(e.target.value)}
        attributes= {[{option: 'Yes', value: 'yes'},{option: 'No', value: 'no'}]}
        selectedValue={selectedEmail}
      />

      <RadioConsent
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

| Name          | Type                                   | Options | Default | Description                                                                                            |
| :------------ | :------------------------------------- | :-----: | :------ | :----------------------------------------------------------------------------------------------------- |
| legend        | String                                 |         |         | This is the title of the radio consent group                                                           |
| name          | String                                 |         |         | Used to link radios together. Must be unique per page                                                  |
| attributes    | Array<{option: string, value: string}> |         |         | This builds the RadioConsent options from an array of objects containing an the option title and value |
| selectedValue | string                                 |         |         | The value of the radio that is selected                                                                |
| onChange      | Function                               |         |         | Callback function called on input change                                                               |
