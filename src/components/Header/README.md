# Header

There should be only one header component near or at the top of the body of each page.

### Logos

It is recommended that logo images are at least 80px high if they are not SVGs and that the logo is still clearly legible when reduced to 40px high for mobile.

It is also recommended that the logo width doesn't exceed 350px. If you need a wide logo that is shorter than 80px to keep the aspect ratio please make sure that the logo is centered with transparent space at the top and bottom and still 80px high.

### Header Text (optional)

This is a single line of text and the character limit depends on the theme, logo and children width. This is only visible on desktop at the top of the page

### Right section (optional)

This has been kept quite open you can place any child elements in here but ideally it is narrow and its height is 50px or smaller.

### Try it out

```.jsx
  <React.Fragment>
    <Header siteSlogan="Header slogan here"><Button>Child component</Button></Header>
  </React.Fragment>
```

## Props

| Name         | Type      | Options | Default               | Description                                                                                                                                       |
| :----------- | :-------- | :-----: | :-------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| isSticky     | boolean   |         | false                 | should header stick to the top of the page when the user scrolls                                                                                  |
| siteSlogan   | string    |         | null                  | slogan that appears in the middle of the header                                                                                                   |
| logoImageSrc | string    |         | SITECONFIG.logoSrc    | src of logo image                                                                                                                                 |
| logoLinkUrl  | string    |         | SITECONFIG.logoUrl    | Logo link URL                                                                                                                                     |
| logoAltText  | string    |         | SITECONFIG.logoAlt    | Logo link alternative text for accessibility                                                                                                      |
| headerText   | string    |         | SITECONFIG.siteSlogan | Text that appears in the center of the header                                                                                                     |
| fullWidth    | boolean   |         | false                 | When true header content stretches to the width of its container when false header content honours maxContentWidth value in theme and is centered |
| children     | ReactNode |         | null                  | Used to place components on the right side                                                                                                        |
