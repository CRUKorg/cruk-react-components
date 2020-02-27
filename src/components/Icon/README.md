# Icon

The Icon component displays an icon glyph as an `<svg>` element.

System icons are designed to be simple, modern, friendly, and sometimes quirky.
Each icon is reduced to its minimal form, expressing essential characteristics.

### Try it out

```.jsx
  <React.Fragment>
    <Icon />
    <Icon size="36px" color="primary" hover="primaryHover" />
    <Icon size="48px" color="secondary"/>
    <Icon name="calendar"/>
    <Icon name="chevronRight"/>
    <Icon name="clock"/>
    <Icon name="comment"/>
    <Icon name="close"/>
    <Icon name="delete"/>
    <Icon name="edit"/>
    <Icon name="eventName"/>
    <Icon name="envelopeSquare"/>
    <Icon name="facebook"/>
    <Icon name="facebookSquare"/>
    <Icon name="linkedin"/>
    <Icon name="messengerSquare"/>
    <Icon name="move"/>
    <Icon name="moveDown"/>
    <Icon name="moveLeft"/>
    <Icon name="moveRight"/>
    <Icon name="moveUp"/>
    <Icon name="poundSign"/>
    <Icon name="rotateLeft"/>
    <Icon name="rotateRight"/>
    <Icon name="search"/>
    <Icon name="selectImage"/>
    <Icon name="settings"/>
    <Icon name="share"/>
    <Icon name="shareSquare"/>
    <Icon name="team"/>
    <Icon name="twitter"/>
    <Icon name="twitterSquare"/>
    <Icon name="upload photo"/>
    <Icon name="uploadPhoto"/>
    <Icon name="view"/>
    <Icon name="whatsappSquare"/>
    <Icon name="zoomIn"/>
    <Icon name="zoomOut"/>
   </React.Fragment>
```

## Props

| Name | Type | Options | Default | Description |
| :- | :- | :-: | :- | :- |
| name | String |  |  | From icon list. Default to question mark. |
| size | String |  |  | Define the size of the icon. Default size 24px. |
| color | String |  |  | From color list or hex code. |
