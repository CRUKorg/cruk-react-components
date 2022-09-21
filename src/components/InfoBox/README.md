# InfoBox

The InfoBox component displays information box view. It provides a variety of options that you may customize to your needs.

### Try it out

```
  import { faBullseye } from "@fortawesome/free-solid-svg-icons";
```

```.jsx
  <>
    <InfoBox
      backgroundColor="#F5F5F5"
      borderColor="black"
      borderSize="1px"
      borderStyle="solid"
      descriptionText="Your Description for info"
      descriptionTextColor="black"
      faIcon={faBullseye}
      headingText="InfoBox Title"
      headingTextColor="black"
      iconColor="green"
      iconSize="20px"
    >
    </InfoBox>
   </>
```

## Props

| Name   | Type           | Default       | Description                                                                                               |
| :----- | :------------- | :------------ | :-------------------------------------------------------------------------------------------------------- |
| faIcon | IconDefinition |               | imported icon definition from "@fortawesome/free-solid-svg-icons" or "@fortawesome/free-brands-svg-icons" |
| color  | string         |               | A theme color name or CSS color. If blank, Icon will match the color of the surrounding text.             |
| size   | string         | 1.1rem (18px) | Icon's width and height.                                                                                  |
