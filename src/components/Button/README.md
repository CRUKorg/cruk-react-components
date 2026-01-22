# Button

Custom button styles for actions in forms, dialogs, and more with support
for multiple sizes, states, and more.

## Try them out

### Primary Button

```.jsx
<>
  <Button appearance="primary">Primary</Button>
  <Button  appearance="primary" disabled appearance="primary">
    Disabled primary
  </Button>
</>
```

### Secondary Button

```.jsx
<>
  <Button appearance="secondary">Secondary</Button>
  <Button disabled appearance="secondary">
    Disabled secondary
  </Button>
</>
```

### Tertiary Button

```.jsx
<>
  <Button appearance="tertiary">Tertiary</Button>
  <Button disabled appearance="tertiary">
    Disabled tertiary
  </Button>
</>
```

### Other Buttons

  <Button>
      <IconFa faIcon={faEye} />
      Icon with text
    </Button>
    <Button>
      Icon right
      <IconFa faIcon={faPenToSquare} />
    </Button>

```.jsx
<>
  <Button appearance="secondary">
    <IconFa faIcon={faEye} />
    Icon with text
  </Button>
  <Button>
    Icon right
    <IconFa faIcon={faPenToSquare} />
  </Button>
  <Button appearance="tertiary">
    <IconFa faIcon={faEye} />
    Icon either side
    <IconFa faIcon={faEye} />
  </Button>
  <Button href="https://cancerresearch.org.uk/">Link as Button</Button>
  <Button aria-label="Upload a photo">
    <Icon name="uploadPhoto" />
  </Button>
  <Button full>Full width Button</Button>
</>
```

## Props

| Name       | Type    |             Options              | Default | Description                                                                                                                                                                                 |
| :--------- | :------ | :------------------------------: | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| appearance | String  | "primary" "secondary" "tertiary" | outline | The `appearance` prop defines the overall visual style of the Button. You can use this prop to indicate to the user the purpose or importance of the button, or call their attention to it. |
| aria-label | String  |                                  | null    | To improve accessibility of a button add an aria label if the button contains no text                                                                                                       |
| css        | String  |                                  | null    | Override the styling of the button                                                                                                                                                          |
| disabled   | Boolean |                                  | false   | Make buttons look inactive by adding the disabled prop to.                                                                                                                                  |
| href       | String  |                                  | null    | Link buttons will cause the button to be styled similarly to a hyperlink, and are primarily used when the button is embedded in another component (for example, a form field).              |
| full       | boolen  |                                  | false   | Button width is 100%                                                                                                                                                                        |
