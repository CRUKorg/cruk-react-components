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
      headingText="InfoBox Default"
      iconFa={<IconFa faIcon={faBullseye} size="25px" color="#fff">}
    />}
   </>
```

## Props

| Name                 | Type      | Default | Description                                     |
| :------------------- | :-------- | :------ | :---------------------------------------------- |
| headingText          | string    |         | Your heading text                               |
| headingTextColor     | string    | #000    | Your heading text color                         |
| descriptionText      | string    |         | Your description text                           |
| descriptionTextColor | string    | #000    | Your description text color                     |
| iconFa               | ReactNode |         | IconFa React Element from @cruk/react-component |
