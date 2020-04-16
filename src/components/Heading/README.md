# Heading

Use headings consistently to create a clear hierarchy throughout your service.
Markup headings semantically using the appropriate <h#> level HTML element and
use the corresponding heading class (h1, h2, h3, ....). Write all headings in sentence case.

### Try it out

```.jsx
  <React.Fragment>
    <Heading h1>This is H1 heading</Heading>
    <Heading>H2 is the default</Heading>
    <Heading h2>This is H2 heading</Heading>
    <Heading h2 textSize="extraExtraExtraExtraLarge" textColor="primary">This is H2 with H1 size</Heading>
    <Heading h3 textColor="#ff00ff">This is H3 heading</Heading>
    <Heading h4>This is H4 heading</Heading>
    <Heading h5>This is H5 heading</Heading>
    <Heading h6>This is H6 heading</Heading>
    <Heading textAlign="center">This is center aligned</Heading>
    <Heading textAlign="right">This is right aligned</Heading>
  </React.Fragment>
```

## Props

| Name              | Type                    | Default                 | Description                                                 |
| :---------------- | :---------------------- | :---------------------- | :---------------------------------------------------------- |
| h1 h2 h3 h4 h5 h6 |                         | h2                      | Choose the heading level                                    |
| textAlign         | 'left'/'right'/'center' | 'left'                  | text alignment                                              |
| textColor         | string                  | 'theme.colors.textDark' | set the heading text color alignment                        |
| textSize          | FontSizeType            | depends on h number     | font size of header, this will scale still with breakpoints |
| margin            | SpaceType               |                         | unset                                                       | margin top, bottom, left and right |
| marginVertical    | SpaceType               |                         | unset                                                       | margin top and bottom |
| marginHorizontal  | SpaceType               |                         | unset                                                       | margin left and right |
| marginTop         | SpaceType               |                         | 'medium' (0 if first child)                                 | margin top |
| marginRight       | SpaceType               |                         | unset                                                       | margin right right |
| marginBottom      | SpaceType               |                         | 'small'                                                     | margin bottom bottom |
| marginLeft        | SpaceType               |                         | unset                                                       | margin left left |
| padding           | SpaceType               |                         | unset                                                       | padding top, bottom, left and right |
| paddingVertical   | SpaceType               |                         | unset                                                       | padding top and bottom |
| paddingHorizontal | SpaceType               |                         | unset                                                       | padding left and right |
| paddingTop        | SpaceType               |                         | unset                                                       | padding top |
| paddingRight      | SpaceType               |                         | unset                                                       | padding right right |
| paddingBottom     | SpaceType               |                         | unset                                                       | padding bottom bottom |
| paddingLeft       | SpaceType               |                         | unset                                                       | padding left left |

### SpaceType

| Option            | Value    |
| :---------------- | :------- |
| "none"            | "0"      |
| "auto"            | "auto"   |
| "extraExtraSmall" | "0.5rem" |
| "extraSmall"      | "1rem"   |
| "small"           | "1.5rem" |
| "medium"          | "2rem"   |
| "large"           | "2.5rem" |
| "extraLarge"      | "3rem"   |
| "extraExtraLarge" | "3.5rem" |
