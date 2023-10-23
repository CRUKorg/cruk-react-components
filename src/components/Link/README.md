# Link

Links are for wrapping plain text or elements to create clickable link. This is to be treated as an anchor tag with the addition of the Text component API. This component contains standard Anchor tag props like 'href' and 'target', but it also contains Text component props like 'textColor' and 'textAlign'. A link should really only be used for navigation to take a user to as new location. The onClick handler can be use for more complicated scenarios. If you want something that looks like a link but behaves like a button ie. nothing to do with navigation, please consider using a button with appearance set to 'link'

### Try it out

```.jsx
  <>
    <div>
      <Link href="http://www.google.com">Default link</Link>
    </div>
    <div>
      <Link href="http://www.google.com" appearance="primary">Primary link</Link>
    </div>
    <div>
      <Link href="http://www.google.com" appearance="secondary">secondary link</Link>
    </div>
    <div>
    <Link href="http://www.google.com" aria-label="google homepage"><img style={{width: '80px', height: '30px'}} alt="" src='https://rcl.assets.cancerresearchuk.org/images/logos/cruk-160.png'/></Link>
    </div>
  </>
```

## Props

| Name           | Type                       | Options | Default               | Description                                                                         |
| :------------- | :------------------------- | :-----: | :-------------------- | :---------------------------------------------------------------------------------- |
| href           | string                     |         |                       | URL of link                                                                         |
| target         | string                     |         | '\_self'              | How the link opens                                                                  |
| aria-label     | string                     |         |                       | This should be used when there is no text in the link to describe where it is going |
| rel            | string                     |         | "noopener noreferrer" | Relationship with the link and the current page                                     |
| appearance     | null / primary / secondary |         | null                  | Default, primary or secondary link appearance                                       |
| onClick        | function                   |         |                       | On click handler function                                                           |
| textColor      | string                     |         | 'currentColor'        | Color of text, will work with theme colour names and hex strings                    |
| textHoverColor | string                     |         | 'currentColor'        | Hover color of text                                                                 |
| textAlign      | 'left' /'right' / 'center' |         | 'left'                | Horizontal text alignment                                                           |
| textSize       | FontSizeType               |         | 'm'                   | Font size uses t-shirt sizes of s/m/l etc                                           |
| textWeight     | number / string            |         | '500'                 | Font weight                                                                         |
