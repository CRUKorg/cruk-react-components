# Box

Wrapper container with spacing properties

# Spacing

You can use Box to wrap other components to add margin and padding. The values will be in the t-shirt sizes specified in the theme sizes.

The more specific the the target the higher priority the css will have. For example `margin` will be overridden by the `marginVertical` or `marginHorizontal` props. `marginTop`, `marginBottom`, `marginLeft`, `marginRight` will override the the `marginVertical` and `marginHorizontal` props.

### Try them out

```.jsx
<React.Fragment>
  <Box>This is box</Box>
  <Box backgroundColor="primary">
    <Text textColor="textLight">
      This is box
    </Text>
  </Box>
  <Box backgroundColor="secondary">
    <Text textColor="textLight">
      This is box
    </Text>
  </Box>
  <Box backgroundColor="tertiary">
    <Text textColor="textLight">
      This is box
    </Text>
  </Box>
  <Box backgroundColor="#fdc02f">
    <Text textColor="textLight">
      This is box
    </Text>
  </Box>
  <Box backgroundColor="secondary" >
    <Text textColor="textLight">
      default spacing
    </Text>
  </Box>
  <Box backgroundColor="secondary" paddingVertical="extraLarge" paddingBottom="extraSmall">
    <Text textColor="textLight">
      paddingVertical="extraLarge" paddingBottom="extraSmall"
    </Text>
  </Box>
  <Box backgroundColor="primary" marginVertical="large" marginLeft="small">
    <Text textColor="textLight">
      marginVertical="large" marginLeft="small"
    </Text>
  </Box>
</React.Fragment>
```

## Props

| Name              | Type      | Options | Default      | Description                                   |
| :---------------- | :-------- | :-----: | :----------- | :-------------------------------------------- |
| backgroundColor   | String    |         |              | Define the background colour of the container |
| margin            | SpaceType |         | 'extraSmall' | margin top, bottom, left and right            |
| marginVertical    | SpaceType |         | unset        | margin top and bottom                         |
| marginHorizontal  | SpaceType |         | unset        | margin left and right                         |
| marginTop         | SpaceType |         | unset        | margin top                                    |
| marginRight       | SpaceType |         | unset        | margin right right                            |
| marginBottom      | SpaceType |         | unset        | margin bottom bottom                          |
| marginLeft        | SpaceType |         | unset        | margin left left                              |
| padding           | SpaceType |         | unset        | padding top, bottom, left and right           |
| paddingVertical   | SpaceType |         | unset        | padding top and bottom                        |
| paddingHorizontal | SpaceType |         | unset        | padding left and right                        |
| paddingTop        | SpaceType |         | unset        | padding top                                   |
| paddingRight      | SpaceType |         | unset        | padding right right                           |
| paddingBottom     | SpaceType |         | unset        | padding bottom bottom                         |
| paddingLeft       | SpaceType |         | unset        | padding left left                             |

### SpaceType

| Option            | Value    |
| :---------------- | :------- |
| "none"            | "0"      |
| "auto"            | "auto"   |
| "extraExtraSmall" | "0.5rem" |
| "extraSmall"      | "1rem"   |
| "small"           | "1.5rem" |
| "medium"          | "2rem"   |
| "large"           | "2.5rem" |
| "extraLarge"      | "3rem"   |
| "extraExtraLarge" | "3.5rem" |
