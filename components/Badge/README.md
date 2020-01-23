# Badge

Displays a numeric or icon indicator. You can use the icon prop to
indicate the importance of the badge to the user.

### Try them out

```.jsx
<React.Fragment>
  <Badge><Icon name="poundSign"/></Badge>
  <Badge bgColor="secondary"><Icon name="search"/></Badge>
  <Badge bgColor="tertiary"><Icon name="eventName"/></Badge>
  <Badge bgColor="#8bc34a">2</Badge>
  <Badge bgColor="tertiary"><Icon name="comment" size="23px" /></Badge>
  <Badge>This is text</Badge>
</React.Fragment>
```

## Props

| Name | Type | Options | Default | Description |
| :- | :- | :-: | :- | :- |
| bgColor | String | | "primary" | Define the background colour of the Badge |
| text | Boolean |  | true | Return true when type of children is string |

## Usage

Note that depending on how they are used, badges may be confusing for users
of screen readers and similar assistive technologies. While the styling of
badges provides a visual cue as to their purpose, these users will simply
be presented with the content of the badge. Depending on the specific
situation, these badges may seem like random additional words or numbers
at the end of a sentence, link, or button. Unless the context is clear,
consider including additional context with a visually hidden piece of
additional text.
