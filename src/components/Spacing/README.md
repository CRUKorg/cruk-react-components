# Spacing

The spacing API is available on all components. You can use it to customise the margin and padding on every component using the set sizes from the theme.

Components may have default padding and margin but using the spacing API props like 'marginTop' will override the default values within a component.

The more specific the the target the higher priority the css will have. For example 'margin' will be overridden by the 'marginVertical' or 'marginHorizontal' props. 'marginTop', 'marginBottom', 'marginLeft', 'marginRight' will override the the 'marginVertical' and 'marginHorizontal' props.

### Try them out

```.jsx
<React.Fragment>
  <Box backgroundColor="secondary" >default spacing</Box>
  <Box backgroundColor="secondary" paddingVertical="extraLarge" paddingBottom="extraSmall">
    paddingVertical="extraLarge" paddingBottom="extraSmall"
  </Box>
  <Box backgroundColor="primary" marginVertical="large" marginLeft="small">
    marginVertical="large" marginLeft="small"
  </Box>
</React.Fragment>
```

## Props

| Name              | Type      | Options | Default | Description                          |
| :---------------- | :-------- | :-----: | :------ | :----------------------------------- |
| margin            | SpaceType |         | unset   | margin, top, bottom, left and right  |
| marginVertical    | SpaceType |         | unset   | margin top and bottom                |
| marginHorizontal  | SpaceType |         | unset   | margin left and right                |
| marginTop         | SpaceType |         | unset   | margin top                           |
| marginRight       | SpaceType |         | unset   | margin right right                   |
| marginBottom      | SpaceType |         | unset   | margin bottom bottom                 |
| marginLeft        | SpaceType |         | unset   | margin left left                     |
| padding           | SpaceType |         | unset   | padding, top, bottom, left and right |
| paddingVertical   | SpaceType |         | unset   | padding top and bottom               |
| paddingHorizontal | SpaceType |         | unset   | padding left and right               |
| paddingTop        | SpaceType |         | unset   | padding top                          |
| paddingRight      | SpaceType |         | unset   | padding right right                  |
| paddingBottom     | SpaceType |         | unset   | padding bottom bottom                |
| paddingLeft       | SpaceType |         | unset   | padding left left                    |
