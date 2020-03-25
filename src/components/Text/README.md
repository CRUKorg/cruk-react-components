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

| Name      | Type                       | Options | Default        | Description                                                                   |
| :-------- | :------------------------- | :-----: | :------------- | :---------------------------------------------------------------------------- |
| textColor | string                     |         | 'currentColor' | Color of text                                                                 |
| textAlign | 'left' /'right' / 'center' |         | 'left'         | Horizontal text alignment                                                     |
| textSize  | FontSizeType               |         | 'medium'       | Font size uses t-shirt sizes of small medium large etc                        |
| as        | element as string          |         | 'p'            | Takes the font styling and applies it to an element such as 'label' or 'span' |
