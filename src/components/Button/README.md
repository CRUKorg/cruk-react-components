# Button

Custom button styles for actions in forms, dialogs, and more with support
for multiple sizes, states, and more.

### Try them out

```.jsx
<>
  <Button>Button</Button>
  <Button appearance="primary">Primary</Button>
  <Button appearance="secondary">Secondary</Button>
  <Button disabled>Disabled</Button>
  <Button disabled appearance="primary">Disabled primary</Button>
  <Button disabled appearance="secondary">Disabled secondary</Button>
  <Button size="large">Large button</Button>
  <Button><Icon name="view"/>Icon with text</Button>
  <Button>Icon right<Icon name="edit"/></Button>
  <Button><Icon name="view"/>Icon either side<Icon name="view"/></Button>
  <Button href="https://www.styled-components.com/">Link as Button</Button>
  <Button appearance="text">Button with no borders</Button>
  <Button aria-label="Upload a photo"><Icon name="uploadPhoto"/></Button>
  <Button css="background-color: #4267b2;border-color: #4267b2; color: white; :hover {background-color: #365899; color: white;}"><Icon name="facebookSquare" size="18px" />Continue with facebook</Button>
  <Button full>Full width Button</Button>
</>
```

## Props

| Name       | Type    |           Options            | Default | Description                                                                                                                                                                                 |
| :--------- | :------ | :--------------------------: | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| appearance | String  | "primary" "secondary" "text" | outline | The `appearance` prop defines the overall visual style of the Button. You can use this prop to indicate to the user the purpose or importance of the button, or call their attention to it. |
| size       | String  |           "large"            |         | Define the size of the button. Add "large" for additional sizes.                                                                                                                            |
| aria-label | String  |                              | null    | To improve accessibility of a button add an aria label if the button contains no text                                                                                                       |
| css        | String  |                              | null    | Override the styling of the button                                                                                                                                                          |
| disabled   | Boolean |                              | false   | Make buttons look inactive by adding the disabled prop to.                                                                                                                                  |
| href       | String  |                              | null    | Link buttons will cause the button to be styled similarly to a hyperlink, and are primarily used when the button is embedded in another component (for example, a form field).              |
