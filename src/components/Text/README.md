# Text

For non-header text. The Text component provides a simple API for setting the colors, size and alignment of the text whilst using sizes and colors specified in the theme.

### Try them out

```.jsx
  <React.Fragment>
    <Text>This is text it defaults to a paragraph tag</Text>
    <Text as='span'>This is text as a span tag</Text>
    <Text textColor='primary'>Color is Primary</Text>
    <Text textColor='#ff0000'>Color is Primary</Text>
    <Text textSize="large">Text size large</Text>
  </React.Fragment>
```

## Props

| Name              | Type                       | Options | Default        | Description                                                                     |
| :---------------- | :------------------------- | :-----: | :------------- | :------------------------------------------------------------------------------ |
| textColor         | string                     |         | 'currentColor' | Color of text                                                                   |
| textAlign         | 'left' /'right' / 'center' |         | 'left'         | Horizontal text alignment                                                       |
| textSize          | FontSizeType               |         | 'medium'       | Font size uses t-shirt sizes of small medium large etc                          |
| as                | element as string          |         | 'p'            | Takes the font styling and applies it to an element such as 'label' or 'span'   |
| gutterBottom      | boolean                    |         | true           | Adds bottom gutter to the text element only works when 'as' is undefined or 'p' |
| gutterTop         | boolean                    |         | false          | Adds top gutter to the text element only works when 'as' is undefined or 'p'    |
| margin            | SpaceType                  |         | unset          | margin top, bottom, left and right                                              |
| marginVertical    | SpaceType                  |         | unset          | margin top and bottom                                                           |
| marginHorizontal  | SpaceType                  |         | unset          | margin left and right                                                           |
| marginTop         | SpaceType                  |         | unset          | margin top                                                                      |
| marginRight       | SpaceType                  |         | unset          | margin right right                                                              |
| marginBottom      | SpaceType                  |         | 'extraSmall'   | margin bottom bottom                                                            |
| marginLeft        | SpaceType                  |         | unset          | margin left left                                                                |
| padding           | SpaceType                  |         | unset          | padding top, bottom, left and right                                             |
| paddingVertical   | SpaceType                  |         | unset          | padding top and bottom                                                          |
| paddingHorizontal | SpaceType                  |         | unset          | padding left and right                                                          |
| paddingTop        | SpaceType                  |         | unset          | padding top                                                                     |
| paddingRight      | SpaceType                  |         | unset          | padding right right                                                             |
| paddingBottom     | SpaceType                  |         | unset          | padding bottom bottom                                                           |
| paddingLeft       | SpaceType                  |         | unset          | padding left left                                                               |

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
