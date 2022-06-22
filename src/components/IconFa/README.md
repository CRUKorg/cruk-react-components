# Icon

The IconFa component (Icon Font Awesome) displays an icon glyph as an `<svg>` element.

This is an svg icon wrapper where a font awesome icon definition can be passed in a long with colour and size

### Try it out

```
  import { faBullseye } from "@fortawesome/free-solid-svg-icons";
```

```.jsx
  <>
    <IconFa faIcon={faBullseye} />
    <IconFa faIcon={faBullseye} size="36px" color="primary" />
    <IconFa faIcon={faBullseye} size="48px" color="secondary" />
   </>
```

## Props

| Name   | Type           | Default       | Description                                                                                               |
| :----- | :------------- | :------------ | :-------------------------------------------------------------------------------------------------------- |
| faIcon | IconDefinition |               | imported icon definition from "@fortawesome/free-solid-svg-icons" or "@fortawesome/free-brands-svg-icons" |
| color  | string         |               | A theme color name or CSS color. If blank, Icon will match the color of the surrounding text.             |
| size   | string         | 1.1rem (18px) | Icon's width and height.                                                                                  |

## Accessibility

Icons are always invisible to screen reads please on use them for decorative purposes or when in a button accompanied by descriptive text or an aria-label.
