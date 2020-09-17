# TextAreaField

TextAreaField lets users enter and edit text over multiple lines.

### Examples

```.jsx
<>
  <section>
    <Heading h4>TextAreaField</Heading>
    <Box>
      <TextAreaField
        label="Tell us more about your fundraising"
        name="firstName"
        defaultValue="I am baking cakes"
      />
    </Box>
  </section>
</>
```

## Props

Other props not listed here (disabled, placeholder, etc.) will be passed to the child &lt;textarea&gt; element.

| Name         | Type                   | Required | Default | Description                                                     |
| :----------- | :--------------------- | :------- | :------ | :-------------------------------------------------------------- |
| label        | string                 | Yes      |         | Will wrap input with label and apply text                       |
| onChange     | function               | Yes      |         | Event handler for input change                                  |
| value        | string                 | Yes      |         | Controlled value of input                                       |
| required     | boolean                |          | false   | If false, add (optional) to the label text                      |
| hasError     | boolean                |          | false   | If true, use error styling for the input                        |
| errorMessage | string                 |          |         | Error message, If defined, use error styling for the input text |
| hintText     | ReactElement \| string |          |         | Extra help text between the label and input                     |

## Accessibility

Error text has the role="alert" attribute so that it is automaticaly read out by a screen reader. For more info see ErrorText component

Only label text will be read out by a screen reader in form mode. Text in the extra props could be preppended to the label text and added as an aria-label to help accessibility.
