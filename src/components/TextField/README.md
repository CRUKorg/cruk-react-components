# Text Field

Text fields let users enter and edit text.

### Examples

```.jsx
<>
  <TextField
    label="Label text"
    onChange={(e) => console.log(e.target.value)}
    placeholder="This is a placeholder"
    defaultValue="Initial value"
  />
  <TextField
    label="Has error"
    hasError
    label="A label"
    onChange={(e) => console.log(e.target.value)}
    placeholder="This is a placeholder"
    error="This field is required"
  />
  <TextField
    label="Extra top"
    extraTop={`${location.hostname}/page/`}
  />
  <TextField
    label="Extra left"
    extraLeft="£"
    error="This field has an error 🙁"
  />
  <TextField
    label="Extra right"
    extraRight={<Button appearance="text" icon="search" />}
  />
  <TextField
    label="Extra bottom"
    extraBottom="Extra stuff here"
  />
</>
```

## Props

| Name        | Type     | Options | Default | Description                               |
| :---------- | :------- | :-----: | :------ | :---------------------------------------- |
| disabled    | boolean  |         | false   | Applies disabled attribute to HTML input  |
| extraTop    | String   |         |         | Displayed on top of the input             |
| extraRight  | String   |         |         | Displayed inline after the input          |
| extraBottom | String   |         |         | Displayed under the input                 |
| extraLeft   | String   |         |         | Displayed inline before the input         |
| hasError    | boolean  |         |         | Applies error styling to input            |
| label       | String   |         |         | Will wrap input with label and apply text |
| onChange    | Function |         |         | Callback function called on input change  |
| value       | String   |         |         | Default value for input                   |

## Accessibility

Error text has the role="alert" attribute so that it is automaticaly read out by a screen reader. For more info see ErrorText component

Only label text will be read out by a screen reader in form mode. Text in the extra props could be preppended to the label text and added as an aria-label to help accessibility.
