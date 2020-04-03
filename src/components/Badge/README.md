# Badge

Displays a numeric or icon indicator. You can use the icon prop to
indicate the importance of the badge to the user.

### Try them out

```.jsx
<React.Fragment>
  <Badge><Icon name="poundSign"/></Badge>
  <Badge backgroundColor="secondary"><Icon name="search"/></Badge>
  <Badge backgroundColor="tertiary"><Icon name="eventName"/></Badge>
  <Badge backgroundColor="#8bc34a">2</Badge>
  <Badge backgroundColor="tertiary"><Icon name="comment" size="23px" /></Badge>
  <Badge>This is text</Badge>
</React.Fragment>
```

## Props

| Name             | Type      | Options | Default   | Description                                 |
| :--------------- | :-------- | :-----: | :-------- | :------------------------------------------ |
| backgroundColor  | String    |         | "primary" | Define the background colour of the Badge   |
| text             | Boolean   |         | true      | Return true when type of children is string |
| margin           | SpaceType |         | unset     | margin, top, bottom, left and right         |
| marginVertical   | SpaceType |         | unset     | margin top and bottom                       |
| marginHorizontal | SpaceType |         | unset     | margin left and right                       |
| marginTop        | SpaceType |         | unset     | margin top                                  |
| marginRight      | SpaceType |         | unset     | margin right right                          |
| marginBottom     | SpaceType |         | unset     | margin bottom bottom                        |
| marginLeft       | SpaceType |         | unset     | margin left left                            |

## Usage

Note that depending on how they are used, badges may be confusing for users
of screen readers and similar assistive technologies. While the styling of
badges provides a visual cue as to their purpose, these users will simply
be presented with the content of the badge. Depending on the specific
situation, these badges may seem like random additional words or numbers
at the end of a sentence, link, or button. Unless the context is clear,
consider including additional context with a visually hidden piece of
additional text.
