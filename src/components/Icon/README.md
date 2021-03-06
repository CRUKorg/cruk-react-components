# Icon

The Icon component displays an icon glyph as an `<svg>` element.

System icons are designed to be simple, modern, friendly, and sometimes quirky.
Each icon is reduced to its minimal form, expressing essential characteristics.

### Try it out

```.jsx
  <>
    <Icon name="question" />
    <Icon name="question" size="36px" color="primary"/>
    <Icon name="question" size="48px" color="secondary" />
    <Icon name="calendar" />
    <Icon name="check" />
    <Icon name="checkCircle" />
    <Icon name="chevronLeft" />
    <Icon name="chevronRight" />
    <Icon name="chevronRightBold" />
    <Icon name="cog" />
    <Icon name="copy" />
    <Icon name="clock" />
    <Icon name="close" />
    <Icon name="comment" />
    <Icon name="delete" />
    <Icon name="edit" />
    <Icon name="envelope" />
    <Icon name="envelopeSquare" />
    <Icon name="eventName" />
    <Icon name="heartbeat" />
    <Icon name="facebook" />
    <Icon name="facebookRound" />
    <Icon name="facebookSquare" />
    <Icon name="flag" />
    <Icon name="link" />
    <Icon name="linkedinSquare" />
    <Icon name="linkedin" />
    <Icon name="mapMarker" />
    <Icon name="messengerSquare" />
    <Icon name="move" />
    <Icon name="moveDown" />
    <Icon name="moveLeft" />
    <Icon name="moveRight" />
    <Icon name="moveUp" />
    <Icon name="poundSign" />
    <Icon name="question" />
    <Icon name="rotateLeft" />
    <Icon name="rotateRight" />
    <Icon name="search" />
    <Icon name="selectImage" />
    <Icon name="settings" />
    <Icon name="share" />
    <Icon name="shareSquare" />
    <Icon name="steps" />
    <Icon name="sync" />
    <Icon name="team" />
    <Icon name="twitter" />
    <Icon name="twitterSquare" />
    <Icon name="uploadPhoto" />
    <Icon name="userLock" />
    <Icon name="view" />
    <Icon name="walk" />
    <Icon name="whatsapp" />
    <Icon name="whatsappSquare" />
    <Icon name="zoomIn" />
    <Icon name="zoomOut" />
   </>
```

## Props

| Name      | Type   | Default       | Description                                                                                   |
| :-------- | :----- | :------------ | :-------------------------------------------------------------------------------------------- |
| name      | string |               | One of the above icon names.                                                                  |
| color     | string |               | A theme color name or CSS color. If blank, Icon will match the color of the surrounding text. |
| size      | string | 1.1rem (18px) | Icon's width and height.                                                                      |
| transform | string |               | A CSS transform like "scale(-1, 1)"                                                           |

## Accessibility

Icons are always invisible to screen reads please on use them for decorative purposes or when in a button accompanied by descriptive text or an aria-label.
