# Box

Wrapper container with spacing properties

# Spacing

You can use Box to wrap other components to add margin and padding. The values will be in the t-shirt sizes specified in the theme sizes.

The more specific the the target the higher priority the css will have. For example `margin` will be overridden by the `marginVertical` or `marginHorizontal` props. `marginTop`, `marginBottom`, `marginLeft`, `marginRight` will override the the `marginVertical` and `marginHorizontal` props.

### Try them out

```.jsx
<>
  <Box>This is box</Box>
  <Box backgroundColor="primary">
    <Text textColor="textLight">
      This is box
    </Text>
  </Box>
  <Box backgroundColor="backgroundLight">
    <Text textColor="textDark">
      This is box
    </Text>
  </Box>
  <Box backgroundColor="tertiary">
    <Text textColor="textLight">
      This is box
    </Text>
  </Box>
  <Box backgroundColor="backgroundMid" >
    <Text textColor="textDark">
      default spacing
    </Text>
  </Box>
  <Box backgroundColor="backgroundMid" paddingVertical="xl" paddingBottom="xs">
    <Text textColor="textDark">
      paddingVertical="xl" paddingBottom="xs"
    </Text>
  </Box>
  <Box backgroundColor="primary" marginVertical="l" marginLeft="s">
    <Text textColor="textLight">
      marginVertical="l" marginLeft="s"
    </Text>
  </Box>
</>
```

## Props

| Name              | Type      | Options | Default | Description                                                                                       |
| :---------------- | :-------- | :-----: | :------ | :------------------------------------------------------------------------------------------------ |
| backgroundColor   | String    |         |         | Define the background colour of the container, can use theme color names (preferable) or hexcodes |
| margin            | SpaceType |         | 'xs'    | margin top, bottom, left and right                                                                |
| marginVertical    | SpaceType |         | unset   | margin top and bottom                                                                             |
| marginHorizontal  | SpaceType |         | unset   | margin left and right                                                                             |
| marginTop         | SpaceType |         | unset   | margin top                                                                                        |
| marginRight       | SpaceType |         | unset   | margin right right                                                                                |
| marginBottom      | SpaceType |         | unset   | margin bottom bottom                                                                              |
| marginLeft        | SpaceType |         | unset   | margin left left                                                                                  |
| padding           | SpaceType |         | unset   | padding top, bottom, left and right                                                               |
| paddingVertical   | SpaceType |         | unset   | padding top and bottom                                                                            |
| paddingHorizontal | SpaceType |         | unset   | padding left and right                                                                            |
| paddingTop        | SpaceType |         | unset   | padding top                                                                                       |
| paddingRight      | SpaceType |         | unset   | padding right right                                                                               |
| paddingBottom     | SpaceType |         | unset   | padding bottom bottom                                                                             |
| paddingLeft       | SpaceType |         | unset   | padding left left                                                                                 |

### SpaceType

| Option | Value    |
| :----- | :------- |
| "none" | "0"      |
| "auto" | "auto"   |
| "xxs"  | "0.5rem" |
| "xs"   | "1rem"   |
| "s"    | "1.5rem" |
| "m"    | "2rem"   |
| "l"    | "2.5rem" |
| "xl"   | "3rem"   |
| "xxl"  | "3.5rem" |
