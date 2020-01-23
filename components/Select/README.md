# Select

Select components are used for collecting user provided information from a list of options.

### Examples

```.jsx
<>
  <Select defaultValue="" onChange={e => console.log(event.target.value)}>
    <option disabled value="">--Please choose an option--</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
  </Select>
  <Select hasError label="Has error">
    <option value="dog">Dog</option>
  </Select>
  <Select error="This feild is required ☹️" label="Error message">
    <option value="cat">Cat</option>
  </Select>
</>
```

## Props

| Name | Type | Options | Default | Description |
| :- | :- | :-: | :- | :- |
| onChange | Function | |  | Callback function called on input change|
| value | String | | | If value is set component must be managed |

## Notes

