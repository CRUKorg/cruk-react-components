
# Legend Wrapper

To be used in forms wrapping form elements with a fieldset with a legend.


### Examples
```.jsx
<>
    <section>
        <Heading h3>
            Legend Wrapper
        </Heading>
        <Box marginBottom="m">
            <LegendWrapper
                legend="Legend Example"
            />
        </Box>
    </section>
    <section>
        <Heading h3>
            Required
        </Heading>
        <Box marginBottom="m">
            <LegendWrapper
                legend="Legend Example"
                required
            />
        </Box>
    </section>
    <section>
        <Heading h3>
            Radio
        </Heading>
        <Box marginBottom="m">
            <LegendWrapper
                legend="Legend Example"
            >
                <Radio name="example1" value="one">
                    Option one
                </Radio>
        </LegendWrapper>
        </Box>
    </section>

    <section>
        <Heading h3>
            Radio Error
        </Heading>
        <Box marginBottom="m">
            <LegendWrapper
                legend="Legend Example"
                hasError
                errorMessage="Error Message"
            >
                <Radio name="example1" value="one">
                    Option one
                </Radio>
        </LegendWrapper>
        </Box>
    </section>
    <section>
        <Heading h3>Checkbox</Heading>
        <Box marginBottom="m">
            <LegendWrapper
                legend="Legend Example"
            >
                <Checkbox disabled={false} value="value" />
            </LegendWrapper>
        </Box>
    </section>

    <section>
        <Heading h3>Checkbox Error</Heading>
        <Box marginBottom="m">
            <LegendWrapper
                legend="Legend Example"
                hasError
                errorMessage="Error Message"
            >
                <Checkbox disabled={false} value="value" />
            </LegendWrapper>
        </Box>
    </section>
</>
```


## Props


| Name             | Type                   | Required | Default | Description                                                                                                         |
| :------------ | :------------------- | :-----: | :-------- | :---------------------------------------------------------------------------------------------------------------- |
| Legend            | string                 | Yes      |         | Fieldset with legend
| required         | boolean                |          | false   | If false, add (optional) to the legend                                      |
| hasError         | boolean                |          | false   | If true, use error styling for the input                                  |
| errorMessage     | string                 |          |         | Error message, If defined, use error styling for the children    |
| hintText         | ReactElement \| string |          |         | Extra help text between the legend and children                               |


## Accessibility

Error text has the role="alert" attribute so that it is automatically read out by a screen reader. For more info see ErrorText component

Only legend text will be read out by a screen reader in form mode.