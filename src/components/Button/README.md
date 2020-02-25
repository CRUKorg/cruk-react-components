# Button

Custom button styles for actions in forms, dialogs, and more with support
for multiple sizes, states, and more.

### Try them out

```.jsx
<React.Fragment>
  <Button>Button</Button>
  <Button appearance="primary">Primary</Button>
  <Button appearance="secondary">Secondary</Button>
  <Button disabled>Disabled</Button>
  <Button disabled appearance="primary">Disabled primary</Button>
  <Button disabled appearance="secondary">Disabled secondary</Button>
  <Button size="small">Small button</Button>
  <Button size="large">Large button</Button>
  <Button icon="view">Icon button</Button>
  <Button icon="edit" iconAlign="right">Icon Right</Button>
  <Button href="https://www.styled-components.com/">Link as Button</Button>
  <Button appearance="link">Button as Link</Button>
  <Button icon="uploadPhoto"></Button>
  <Button icon="upload Photo"></Button>
  <Button ariaLabel="camera" icon="Upload Photo"></Button>
  <Button css="background-color: #4267b2;border-color: #4267b2; color: white; :hover {background-color: #365899; color: white;}"><Icon name="facebookSquare" size="18px" style={{float:"left"}}/>Continue with facebook</Button>
  <Button full>Full width Button</Button>
</React.Fragment>
```

## Props

| Name | Type | Options | Default | Description |
| :- | :- | :-: | :- | :- |
| appearance | String | "primary" "secondary" "link" | outline | The `appearance` prop defines the overall visual style of the Button. You can use this prop to indicate to the user the purpose or importance of the button, or call their attention to it. |
| size | String | "small" "large" | | Define the size of the button. Add "large" or "small" for additional sizes. |
| icon | String/React node | |  | Name of the available icon |
| iconAlign | Boolean | "right" | left |  |
| ariaLabel | String | | null | To improve accessibility of button, `aria-label` takes value of text. If there's no text, it takes value from name of icon. Fallback: `button` You can override by passing props of `ariaLabel`. |
| css | String | | null | Override the styling of the button |
| disabled | Boolean | | false | Make buttons look inactive by adding the disabled prop to. |
| href | String | | null | Link buttons will cause the button to be styled similarly to a hyperlink, and are primarily used when the button is embedded in another component (for example, a form field). |
