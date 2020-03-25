# Link

Links are for wrapping plain text or elements to create clickable link. This is to be treated as an anchor tag with the addition of the Text component API. This component contains standard Anchor tag props like 'href' and 'target', but it also contains Text component props like 'textColor' and 'textAlign'. A link should really only be used for navigation to take a user to as new location. The onClick handler can be use for more complicated scenarios. If you want something that looks like a link but behaves like a button ie. nothing to do with navigation, please consider using a button with appearance set to 'link'

### Try it out

```.jsx
  <React.Fragment>
    <div>
      <Link href="http://www.google.com">Default link</Link>
    </div>
    <div>
      <Link href="http://www.google.com" target='_blank'>Link opens new page</Link>
    </div>
    <div>
    <Link href="http://www.google.com" rel='noopener noreferrer nofollow'>External link that that want web
    crawlers wont follow</Link>
    </div>
    <div>
    <Link href="http://www.google.com" textColor="secondary" textHoverColor="#004400">Link using different colours</Link>
    </div>
    <div>
    <Link href="http://www.google.com" textSize="extraLarge" textWeight="800">Link with extra large text and 800 weight</Link>
    </div>
    <div>
    <Link href="http://www.google.com" ariaLabel="google homepage"><img style={{width: '80px', height: '30px'}} alt="" src='https://fundraise.cancerresearchuk.org/profiles/cruk_fundraising/themes/cruk_of_bootstrap/logo.png'/></Link>
    </div>
      <div>
      <Link href="#" onClick={() => {alert("from link");}}>With click handler</Link>
    </div>
  </React.Fragment>
```

## Props

| Name           | Type                       | Options | Default               | Description                                                                         |
| :------------- | :------------------------- | :-----: | :-------------------- | :---------------------------------------------------------------------------------- |
| href           | string                     |         |                       | URL of link                                                                         |
| target         | string                     |         | '\_self'              | How the link opens                                                                  |
| ariaLabel      | string                     |         |                       | This should be used when there is no text in the link to describe where it is going |
| rel            | string                     |         | "noopener noreferrer" | Relationship with the link and the current page                                     |
| onClick        | function                   |         |                       | On click handler function                                                           |
| textColor      | string                     |         | 'currentColor'        | Color of text                                                                       |
| textHoverColor | string                     |         | 'currentColor'        | Hover color of text                                                                 |
| textAlign      | 'left' /'right' / 'center' |         | 'left'                | Horizontal text alignment                                                           |
| textSize       | FontSizeType               |         | 'medium'              | Font size uses t-shirt sizes of small medium large etc                              |
| textWeight     | number                     |         | '500'                 | Font weight                                                                         |
