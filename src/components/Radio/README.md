# Radio button input

A single radio button which should be part of a field set of radio buttons

### Try it out

```.jsx
function () {
  const [selected, setSelected] = React.useState('one');
  const handleChange = (value) => {
      setSelected(value)
  }

  return (
    <>
      <Radio
        name="example1"
        onChange={e => handleChange(e.target.value)}
        value="one"
        checked={selected === 'one'}
      >
        Option one
      </Radio>

      <Radio
        name="example1"
        onChange={e => handleChange(e.target.value)}
        value="two"
        checked={selected === 'two'}
      >
        Option two
      </Radio>

      <Heading h2>Selected value {selected}</Heading>
    </>
  )
}
```

### Accessibility

Use a field set with legend (think lable for multiple inputs) to group together multiple radio buttons under one heading.
The legend will be red out by screen readers in form input mode, a div span etc would not.

```.jsx
<>
  <fieldset>
    <legend>Contacted by email?</legend>
      <Radio name="email" value="yes" />
      <Radio name="email" value="no" />
  </fieldset>
</>
```

## Props

| Name     | Type     | Options | Default | Description                                                          |
| :------- | :------- | :-----: | :------ | :------------------------------------------------------------------- |
| checked  | boolean  |         |         | Indicates whether or not the radio button is the currently selected  |
| children | String   |         |         | Used as label text                                                   |
| disabled | boolean  |         | false   | Applies disabled attribute to HTML input                             |
| name     | String   |         |         | Used to link radios together. Must be unique per page                |
| onChange | Function |         |         | Callback function called on input change                             |
| value    | String   |         |         | Value to be returned and used as label if label prop is not supplied |
