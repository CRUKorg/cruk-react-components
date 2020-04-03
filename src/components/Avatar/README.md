# Avatar

### Display an avatar

You can use an avatar to display ownership of an item of content. If you pass a URL of an image that will be displayed otherwise the first letter of the name will be used to display a branded avatar.

### Try it out

```.tsx
<React.Fragment>
  <Avatar />
  <Avatar name="Sam" size="small" />
  <Avatar name="Sam" size="medium" />
  <Avatar name="Sam" size="large" />
  <Avatar name="Sam" size="extraLarge" />
  <Avatar
    name="Sam"
    url="https://fundraise.cancerresearchuk.org/profiles/cruk_fundraising/modules/cruk_online_fundraising/images/hero_desktop.jpg"
  />
</React.Fragment>
```

## Props

| Name             | Type      |                Options                | Default   | Description                           |
| :--------------- | :-------- | :-----------------------------------: | :-------- | :------------------------------------ |
| name             | String    |                                       | Anonymous | Title to be displayed as primary text |
| size             | String    | "small" "medium" "large" "extraLarge" | "medium"  | Define the size of the avatar         |
| url              | String    |                                       |           | URL of image for avatar               |
| margin           | SpaceType |                                       | unset     | margin, top, bottom, left and right   |
| marginVertical   | SpaceType |                                       | unset     | margin top and bottom                 |
| marginHorizontal | SpaceType |                                       | unset     | margin left and right                 |
| marginTop        | SpaceType |                                       | unset     | margin top                            |
| marginRight      | SpaceType |                                       | unset     | margin right right                    |
| marginBottom     | SpaceType |                                       | unset     | margin bottom bottom                  |
| marginLeft       | SpaceType |                                       | unset     | margin left left                      |
