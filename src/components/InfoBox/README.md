# InfoBox

The InfoBox component displays information box view. It provides a variety of options that you may customize to your needs.

### Try it out

```
  import { faBullseye } from "@fortawesome/free-solid-svg-icons";
```

```.jsx
  <>
    <InfoBox
      descriptionText="This is a description block for the infobox default component"
      titleText="InfoBox Default"
      icon={<IconFa faIcon={faBullseye} size="1.5em" color="#fff">}
    />
   </>
```

## Props

| Name                 | Type      | Default | Description                 |
| :------------------- | :-------- | :------ | :-------------------------- |
| titleText            | string    |         | Your title text             |
| titleTextColor       | string    | #000    | Your title text color       |
| descriptionText      | string    |         | Your description text       |
| descriptionTextColor | string    | #000    | Your description text color |
| icon                 | ReactNode |         | Icon React Element          |
