# Text Field

Text fields let users enter and edit text.

### Examples

```.jsx
<>
  <section>
    <Heading h4>Text field</Heading>
    <TextField
      label="First name"
      type="text"
      name="firstName"
    />
  </section>
  <section>
    <Heading h4 paddingTop="medium">With a placeholder</Heading>
    <TextField
      label="Your favourite food"
      type="text"
      name="yourFavouriteFood"
      placeholder="Cookies"
    />
  </section>
  <section>
    <Heading h4 paddingTop="medium">With hint text</Heading>
    <TextField
      label="This is the label"
      type="text"
      name="hintText"
      hintText="This is the hint text"
    />
  </section>
  <section>
    <Heading h4 paddingTop="medium">With extra bits</Heading>
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
      extraRight={<Button appearance="text" icon="search" />}
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
  </section>
  <section>
    <Heading h4 paddingTop="medium">With error message</Heading>
    <TextField
      label="Phone number"
      type="text"
      name="phoneNumber"
      hasError
      error="You have made more than one daily outing for exercise"
    />
  </section>
  <section>
    <Heading h4 paddingTop="medium">Required</Heading>
    <TextField
      label="Number of cats"
      type="text"
      name="numberOfCats"
      required
    />
  </section>
  <section>
    <Heading h4 paddingTop="medium">Disabled</Heading>
    <TextField
      label="Favourite pasta type"
      type="text"
      name="favouritePastaType"
      value="Spaghetti"
      disabled
    />
  </section>
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
