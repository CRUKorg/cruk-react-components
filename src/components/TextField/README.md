# Text Field

Text fields let users enter and edit text.

### Examples

```.jsx
<>
  <p>
    Text field
    <TextField
      label="First name"
      type="text"
    />
  </p>
  <p>
    With a placeholder
    <TextField
      label="Your favourite food"
      type="text"
      placeholder="Cookies"
    />
  </p>
  <p>
    With hint text
    <TextField
      label="This is the label"
      type="text"
      hintText="This is the hint text"
    />
  </p>
  <p>
    With extra bits
    <TextField
      label="Fundraising target"
      type="text"
      extraLeft="£"
    />
    <TextField
      label="Search"
      type="text"
      extraRight={<Button appearance="text" icon="search" />}
    />
    <TextField
      label="Fundraising page"
      type="text"
      extraTop={`https://fundraise.cancerresearchuk.org/page/`}
    />
    <TextField
      label="Email address"
      type="text"
      extraBottom="Wash your hands for 20 seconds"
    />
  </p>
  <p>
    With error message
    <TextField
      label="Phone number"
      type="text"
      hasError
      error="You have made more than one daily outing for exercise"
    />
  </p>
  <p>
    Required
    <TextField
      label="Number of cats"
      type="text"
      required
    />
  </p>
  <p>
    Disabled
    <TextField
      label="Favourite pasta type"
      type="text"
      value="Spaghetti"
      disabled
    />
  </p>
</>
```

## Props

| Name        | Type     | Required | Default | Description                                      |
| :---------- | :------- | :------- | :------ | :----------------------------------------------- |
| label       | string   | Yes      |         | Will wrap input with label and apply text        |
| type        | string   | Yes      |         | HTML input type: text, number, email or password |
| onChange    | function | Yes      |         | Event handler for input change                   |
| value       | string   | Yes      |         | Controlled value of input                        |
| disabled    | boolean  |          | false   | If true, add disabled attribute to HTML input    |
| required    | boolean  |          | false   | If false, add (optional) to the label text       |
| hasError    | boolean  |          | false   | If true, use error styling for the input         |
| error       | string   |          |         | Error message text                               |
| placeholder | string   |          |         | Placeholder text in the input                    |
| hintText    | string   |          |         | Extra help text between the label and input      |
| extraTop    | string   |          |         | Displayed on top of the input                    |
| extraRight  | string   |          |         | Displayed inline after the input                 |
| extraBottom | string   |          |         | Displayed under the input                        |
| extraLeft   | string   |          |         | Displayed inline before the input                |

## Accessibility

Error text has the role="alert" attribute so that it is automaticaly read out by a screen reader. For more info see ErrorText component

Only label text will be read out by a screen reader in form mode. Text in the extra props could be preppended to the label text and added as an aria-label to help accessibility.
