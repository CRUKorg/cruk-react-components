# Checkbox

Checkboxes allow the user to select one or more items.

### Examples

```.jsx
<>
  <Checkbox checked value="value" />
  <Checkbox checked={false}>Checkbox</Checkbox>
  <Checkbox checked>Checked</Checkbox>
  <Checkbox checked disabled>Disabled</Checkbox>
  <Checkbox
    onChange={e => alert(e.target.value)}
    value="My value"
  >
    Alert my value
  </Checkbox>
</>
```

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
      <Checkbox
        name="example"
        onChange={e => handleChange(e.target.value)}
        value="one"
        checked={selected.indexOf('one') >= 0}
      >
        Option one
      </Checkbox>
      
      <Checkbox
        name="example"
        onChange={e => handleChange(e.target.value)}
        value="two"
        checked={selected.indexOf('two') >= 0}
      >
        Option two
      </Checkbox>
      
      <Heading h2>Selected values</Heading>
      <ul>
        {selected.map(value => <li>{value}</li>)}
      </ul>
    </>
  )
}
```

## Props

| Name | Type | Options | Default | Description |
| :- | :- | :-: | :- | :- |
| children | String | |  | Used as label text |
| disabled | boolean | | false | Applies disabled attribute to HTML input |
| onChange | Function | |  | Callback function called on input change|
| value | String | | | Value to be returned and used as label if label prop is not supplied |

## Notes

* Should the state be managed withing the component?
* Are we right to use value as label?
* Do we want to style the input itself?
* Do we need name?
