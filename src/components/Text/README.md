# Text

For non-header text. The Text component provides a simple API for setting the colors, size and alignment of the text whilst using sizes and colors specified in the theme.

### Try them out

```.jsx
  <>
    <Text>This is text it defaults to a paragraph tag</Text>
    <Text as='span'>This is text as a span tag</Text>
    <Text textColor='primary'>Color is Primary</Text>
    <Text textSize="l">Text size large</Text>
  </>
```

## Props

| Name              | Type                       | Options | Default        | Description                                                                     |
| :---------------- | :------------------------- | :-----: | :------------- | :------------------------------------------------------------------------------ |
| textColor         | string                     |         | 'currentColor' | Color of text can use theme colour names (preferable) or hex code strings       |
| textAlign         | 'left' /'right' / 'center' |         | 'left'         | Horizontal text alignment                                                       |
| textSize          | FontSizeType               |         | 'm'            | Font size uses t-shirt sizes of s/m/l etc                                       |
| as                | element as string          |         | 'p'            | Takes the font styling and applies it to an element such as 'label' or 'span'   |
| gutterBottom      | boolean                    |         | true           | Adds bottom gutter to the text element only works when 'as' is undefined or 'p' |
| gutterTop         | boolean                    |         | false          | Adds top gutter to the text element only works when 'as' is undefined or 'p'    |
| margin            | SpaceType                  |         | unset          | margin top, bottom, left and right                                              |
| marginVertical    | SpaceType                  |         | unset          | margin top and bottom                                                           |
| marginHorizontal  | SpaceType                  |         | unset          | margin left and right                                                           |
| marginTop         | SpaceType                  |         | unset          | margin top                                                                      |
| marginRight       | SpaceType                  |         | unset          | margin right right                                                              |
| marginBottom      | SpaceType                  |         | 'xs'           | margin bottom bottom                                                            |
| marginLeft        | SpaceType                  |         | unset          | margin left left                                                                |
| padding           | SpaceType                  |         | unset          | padding top, bottom, left and right                                             |
| paddingVertical   | SpaceType                  |         | unset          | padding top and bottom                                                          |
| paddingHorizontal | SpaceType                  |         | unset          | padding left and right                                                          |
| paddingTop        | SpaceType                  |         | unset          | padding top                                                                     |
| paddingRight      | SpaceType                  |         | unset          | padding right right                                                             |
| paddingBottom     | SpaceType                  |         | unset          | padding bottom bottom                                                           |
| paddingLeft       | SpaceType                  |         | unset          | padding left left                                                               |

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
