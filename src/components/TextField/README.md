# Text Field

Text fields let users enter and edit text.

### Examples

```.jsx
<>
  <section>
    <Heading h3>Text field</Heading>
    <Box>
      <TextField
        label="First name"
        type="text"
        name="firstName"
      />
    </Box>
  </section>
  <section>
    <Heading h4 paddingTop="m">With a placeholder</Heading>
    <Box>
      <TextField
        label="Your favourite food"
        type="text"
        name="yourFavouriteFood"
        placeholder="Cookies"
      />
    </Box>
  </section>
  <section>
    <Heading h4 paddingTop="m">With hint text</Heading>
    <Box>
      <TextField
        label="This is the label"
        type="text"
        name="hintText"
        hintText="This is the hint text"
      />
    </Box>
  </section>
  <section>
    <Heading h4 paddingTop="m">With extra bits</Heading>
    <Box>
      <TextField
        label="Fundraising target"
        type="text"
        name="fundraisingTarget"
        extraLeft="£"
      />
    </Box>
    <Box>
      <TextField
        label="Search"
        type="text"
        name="search"
        extraRight={
          <Button appearance="text" aria-label="search">
            <Icon name="search"/>
          </Button>
        }
      />
    </Box>
    <Box>
      <TextField
        label="Fundraising page"
        type="text"
        name="fundraisingPage"
        extraTop={`https://fundraise.cancerresearchuk.org/page/`}
      />
    </Box>
    <Box>
      <TextField
        label="Email address"
        type="text"
        name="emailAddress"
        extraBottom="Wash your hands for 20 seconds"
      />
    </Box>
  </section>
  <section>
    <Heading h4 paddingTop="m">With error message</Heading>
    <Box>
      <TextField
        label="Phone number"
        type="text"
        name="phoneNumber"
        hasError
        errorMessage="You have made more than one daily outing for exercise"
      />
    </Box>
  </section>
  <section>
    <Heading h3 paddingTop="m">Is Valid Indicator</Heading>
    <Box>
      <TextField
        label="Phone number"
        type="text"
        name="phoneNumber"
        isValid={true}
        isValidVisible={true}
      />
    </Box>
  </section>
  <section>
    <Heading h3 paddingTop="m">Is Invalid Indicator</Heading>
    <Box>
      <TextField
        label="Phone number"
        type="text"
        name="phoneNumber"
        isValid={false}
        isInvalidVisible={true}
      />
    </Box>
  </section>
  <section>
    <Heading h3 paddingTop="m">Required</Heading>
    <Box>
      <TextField
        label="Number of cats"
        type="text"
        name="numberOfCats"
        required
      />
    </Box>
  </section>
  <section>
    <Heading h4 paddingTop="m">Disabled</Heading>
    <Box>
      <TextField
        label="Favourite pasta type"
        type="text"
        name="favouritePastaType"
        value="Spaghetti"
        disabled
      />
    </Box>
  </section>
</>
```

## Props

Other props not listed here (disabled, placeholder, etc.) will be passed to the child &lt;input&gt; element.

| Name                 | Type                   | Required | Default | Description                                                                       |
| :------------------- | :--------------------- | :------- | :------ | :-------------------------------------------------------------------------------- |
| label                | string                 | Yes      |         | Will wrap input with label and apply text                                         |
| type                 | string                 | Yes      |         | HTML input type: text, number, email or password                                  |
| onChange             | function               | Yes      |         | Event handler for input change                                                    |
| value                | string                 | Yes      |         | Controlled value of input                                                         |
| required             | boolean                |          | false   | If false, add (optional) to the label text                                        |
| hasError             | boolean                |          | false   | If true, use error styling for the input                                          |
| errorMessage         | string                 |          |         | Error message, If defined, use error styling for the input text                   |
| hintText             | ReactElement \| string |          |         | Extra help text between the label and input                                       |
| isVaild              | Boolean                |          | true    | used with isVaildValidVisible/isVaildValidVisible to show valid/invalid indicator |
| isVaildValidVisible  | Boolean                |          | false   | show valid indicator when isVaild is true                                         |
| isVaildValidInisible | Boolean                |          | false   | show invalid indicator when isValid is false                                      |
| extraTop             | string                 |          |         | Displayed on top of the input                                                     |
| extraRight           | string                 |          |         | Displayed inline after the input                                                  |
| extraBottom          | string                 |          |         | Displayed under the input                                                         |
| extraLeft            | string                 |          |         | Displayed inline before the input                                                 |

## Accessibility

Error text has the role="alert" attribute so that it is automaticaly read out by a screen reader. For more info see ErrorText component

Only label text will be read out by a screen reader in form mode. Text in the extra props could be preppended to the label text and added as an aria-label to help accessibility.
