# Avatar

### Display an avatar

You can use an avatar to display ownership of an item of content. It's basically an image component that if you pass a URL of an image that will be displayed otherwise the first letter of the name will be used to display a branded avatar.

### Try it out

```.tsx
<>
  <Avatar />
  <Avatar name="Sam" size="s" alt="sam's profile"/>
  <Avatar name="Sam" size="m" alt="sam's profile"/>
  <Avatar name="Sam" size="l" alt="sam's profile"/>
  <Avatar name="Sam" size="xl" alt="sam's profile"/>
  <Avatar
    name="Sam"
    alt="sam's profile"
    url="https://via.placeholder.com/300/2e008b/d9318a?text=avatar"
  />
</>
```

## Props

| Name      | Type   |     Options      | Default   | Description                              |
| :-------- | :----- | :--------------: | :-------- | :--------------------------------------- |
| name      | String |                  | Anonymous | Title to be displayed as primary text    |
| size      | String | "s" "m" "l" "xl" | "m"       | Define the size of the avatar            |
| url       | String |                  |           | URL of image for avatar                  |
| themeName | String |                  | "cruk"    | Theme that defines image style of avatar |
