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
      name="firstName"
    />
  </p>
  <p>
    With a placeholder
    <TextField
      label="Your favourite food"
      type="text"
      name="yourFavouriteFood"
      placeholder="Cookies"
    />
  </p>
  <p>
    With hint text
    <TextField
      label="This is the label"
      type="text"
      name="hintText"
      hintText="This is the hint text"
    />
  </p>
  <p>
    With extra bits
    <TextField
      label="Fundraising target"
      type="text"
      name="fundraisingTarget"
      extraLeft="£"
    />
    <TextField
      label="Search"
      type="text"
      name="search"
      extraRight={<Button appearance="text"><Icon name="search"></Button>}
    />
    <TextField
      label="Fundraising page"
      type="text"
      name="fundraisingPage"
      extraTop={`https://fundraise.cancerresearchuk.org/page/`}
    />
    <TextField
      label="Email address"
      type="text"
      name="emailAddress"
      extraBottom="Wash your hands for 20 seconds"
    />
  </p>
  <p>
    With error message
    <TextField
      label="Phone number"
      type="text"
      name="phoneNumber"
      hasError
      error="You have made more than one daily outing for exercise"
    />
  </p>
  <p>
    Required
    <TextField
      label="Number of cats"
      type="text"
      name="numberOfCats"
      required
    />
  </p>
  <p>
    Disabled
    <TextField
      label="Favourite pasta type"
      type="text"
      name="favouritePastaType"
      value="Spaghetti"
      disabled
    />
  </p>
</>
```

## Props

Other props not listed here (disabled, placeholder, etc.) will be passed to the child &lt;input&gt; element.

| Name        | Type     | Required | Default | Description                                      |
| :---------- | :------- | :------- | :------ | :----------------------------------------------- |
| label       | string   | Yes      |         | Will wrap input with label and apply text        |
| type        | string   | Yes      |         | HTML input type: text, number, email or password |
| onChange    | function | Yes      |         | Event handler for input change                   |
| value       | string   | Yes      |         | Controlled value of input                        |
| required    | boolean  |          | false   | If false, add (optional) to the label text       |
| hasError    | boolean  |          | false   | If true, use error styling for the input         |
| error       | string   |          |         | Error message text                               |
| hintText    | string   |          |         | Extra help text between the label and input      |
| extraTop    | string   |          |         | Displayed on top of the input                    |
| extraRight  | string   |          |         | Displayed inline after the input                 |
| extraBottom | string   |          |         | Displayed under the input                        |
| extraLeft   | string   |          |         | Displayed inline before the input                |

## Accessibility

Error text has the role="alert" attribute so that it is automaticaly read out by a screen reader. For more info see ErrorText component

Only label text will be read out by a screen reader in form mode. Text in the extra props could be preppended to the label text and added as an aria-label to help accessibility.
