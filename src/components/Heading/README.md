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
