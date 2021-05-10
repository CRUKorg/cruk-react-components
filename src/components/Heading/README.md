# Heading

Use headings consistently to create a clear hierarchy throughout your service.
Markup headings semantically using the appropriate <h#> level HTML element and
use the corresponding heading class (h1, h2, h3, ....). Write all headings in sentence case. Heading differs from the Text component by using a different font-family and it changes the font size according to the screen width breakpoints.

### Try it out

```.jsx
  <>
    <Heading>H2 is the default</Heading>
    <Heading h2 textSize="xxxxl">This is H2 with H1 size</Heading>
    <Heading h1>This is H1 heading</Heading>
    <Heading h2>This is H2 heading</Heading>
    <Heading h4>This is H4 heading</Heading>
    <Heading h5>This is H5 heading</Heading>
    <Heading h6>This is H6 heading</Heading>
    <Heading textAlign="center">This is center aligned</Heading>
    <Heading textAlign="right">This is right aligned</Heading>
  </>
```

## Props

| Name              | Type                                               | Default                 | Description                                                                                |
| :---------------- | :------------------------------------------------- | :---------------------- | :----------------------------------------------------------------------------------------- |
| h1 h2 h3 h4 h5 h6 |                                                    | h2                      | Choose the heading level                                                                   |
| textAlign         | 'left'/'right'/'center'                            | 'left'                  | text alignment                                                                             |
| textColor         | string                                             | 'theme.colors.textDark' | set the heading text color alignment accepts theme colour names (preferred) or hex string  |
| textSize          | FontSizeType                                       | depends on h number     | font size of header, this will scale still with breakpoints                                |
| wordBreak         | 'normal' / 'break-all' / 'keep-all' / 'break-word' | 'normal'                | Sets whether line breaks appear wherever the text would otherwise overflow its content box |
| margin            | SpaceType                                          | unset                   | margin top, bottom, left and right                                                         |
| marginVertical    | SpaceType                                          | unset                   | margin top and bottom                                                                      |
| marginHorizontal  | SpaceType                                          | unset                   | margin left and right                                                                      |
| marginTop         | SpaceType                                          | 'm' (0 if first child)  | margin top                                                                                 |
| marginRight       | SpaceType                                          | unset                   | margin right right                                                                         |
| marginBottom      | SpaceType                                          | 's'                     | margin bottom bottom                                                                       |
| marginLeft        | SpaceType                                          | unset                   | margin left left                                                                           |
| padding           | SpaceType                                          | unset                   | padding top, bottom, left and right                                                        |
| paddingVertical   | SpaceType                                          | unset                   | padding top and bottom                                                                     |
| paddingHorizontal | SpaceType                                          | unset                   | padding left and right                                                                     |
| paddingTop        | SpaceType                                          | unset                   | padding top                                                                                |
| paddingRight      | SpaceType                                          | unset                   | padding right right                                                                        |
| paddingBottom     | SpaceType                                          | unset                   | padding bottom bottom                                                                      |
| paddingLeft       | SpaceType                                          | unset                   | padding left left                                                                          |

### SpaceType

| Option | Value    |
| :----- | :------- |
| "none" | "0"      |
| "auto" | "auto"   |
| "xxs"  | "0.5rem" |
| "xs"   | "1rem"   |
| "s"    | "1.5rem" |
| "m"    | "2rem"   |
| "l"    | "2.5rem" |
| "xl"   | "3rem"   |
| "xxl"  | "3.5rem" |

### FontSizeType

| Option  | Value       |
| :------ | :---------- |
| "xs"    | "0.75rem"   |
| "s"     | "0.857rem"  |
| "m"     | "1rem"      |
| "l"     | "1.25rem"   |
| "xl"    | "1.5625rem" |
| "xxl"   | "2rem"      |
| "xxxl"  | "2.5rem"    |
| "xxxxl" | "3.125rem"  |
