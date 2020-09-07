# Select

Select components are used for collecting user provided information from a list of options.

### Examples

```.jsx
<>
  <Box>
    <Select value="" label="Disabled option" onChange={(event) => {}}>
      <option disabled value="">--Please choose an option--</option>
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
    </Select>
  </Box>
  <Box>
    <Select value="" label="Disabled control" onChange={(event) => {}} disabled>
      <option disabled value="">--Please choose an option--</option>
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
    </Select>
  </Box>
  <Box>
    <Select required errorMessage="You must select an option" label="Has error" onChange={(event) => {}}>
      <option value="dog">Dog</option>
      <option value="red_panda">Red panda</option>
      <option value="axolotl">Axolotl</option>
    </Select>
  </Box>
  <Box>
    <Select required error="This felid is required ☹️" label="Error message" onChange={(event) => {}}>
      <option value="cat">Cat</option>
    </Select>
  </Box>
</>
```

## Props

Other props not listed here (disabled, placeholder, etc.) will be passed to the child &lt;select&gt; element.

| Name     | Type                   | Required | Default | Description                                                     |
| :------- | :--------------------- | :------- | :------ | :-------------------------------------------------------------- |
| label    | string                 | Yes      |         | Will wrap input with label and apply text                       |
| onChange | function               | Yes      |         | Event handler for input change                                  |
| value    | string                 | Yes      |         | Controlled value of input                                       |
| required | boolean                |          | false   | If false, add (optional) to the label text                      |
| hasError | boolean                |          | false   | If true, use error styling for the input                        |
| error    | string                 |          |         | Error message text. If defined, use error styling for the input |
| hintText | ReactElement \| string |          |         | Extra help text between the label and input                     |

## Notes
