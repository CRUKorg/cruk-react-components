# Checkbox

Checkboxes allow the user to select one or more items.

If the Checkbox component is passed an id, this is used to generate an id for the error container and relationship with the input using aria-describedby.

### Try it out

```.jsx
function () {
  const [selected, setSelected] = React.useState([]);
  const handleChange = (value) => {
    if (selected.indexOf(value) === -1) {
      setSelected([...selected, value])
    } else {
      setSelected(selected.filter(item => item !== value))
    }
  }

  return (
    <>
      <Box>
        <Checkbox
          name="example"
          onChange={e => handleChange(e.target.value)}
          value="one"
          checked={selected.indexOf('one') >= 0}
        >
          Option one
        </Checkbox>
      </Box>
      <Box>
        <Checkbox
          name="example"
          onChange={e => handleChange(e.target.value)}
          value="two"
          checked={selected.indexOf('two') >= 0}
        >
          Option two
        </Checkbox>
      </Box>

      <Heading h2>Selected values</Heading>
      <ul>
        {selected.map(value => <li key={value}>{value}</li>)}
      </ul>

    </>
  )
}
```

## Props

| Name     | Type       | Options | Default | Description                                                                 |
| :------- | :--------- | :-----: | :------ | :-------------------------------------------------------------------------- |
| children | String     |         |         | Used as label text                                                          |
| disabled | boolean    |         | false   | Applies disabled attribute to HTML input                                    |
| onChange | Function   |         |         | Callback function called on input change                                    |
| value    | String     |         |         | Value to be returned and used as label if label prop is not supplied        |
| children | ReactChild |         |         | React node or text to be used as a label, the value is displayed as default |
