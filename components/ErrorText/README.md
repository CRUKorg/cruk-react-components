# ErrorText

To be used in forms for inline validation. Applies styling and accessibility attribute so that it will be read by screen readers.

### Try it out

```.jsx
<React.Fragment>
  <ErrorText>This field is required</ErrorText>
</React.Fragment>
```

## Props

| Name | Type | Options | Default | Description |
| :- | :- | :-: | :- | :- |
| children | String | |  | Used as error text |

## Accessibility

Error text has the role="alert" attribute so that it is automatically read out by a screen reader. Role alert will interrupt current announcements more testing should be done to assert whether this is the required functionality, other options include aria-live="polite" but this has browser support issues.
