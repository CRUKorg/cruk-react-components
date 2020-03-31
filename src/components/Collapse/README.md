# Collapse

Use a collapse component to show and hide content. It has a default view; however, it can be overwritten by passing a custom component as a prop.

### Try them out

```.jsx
<React.Fragment>
  <Collapse headerTitle="What is Lorem Ipsum?" id="default">
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </Collapse>

    <Collapse id="custom" headerTitle={<Box headerTitle="Custom collapse title" backgroundColor="primary">This is box header</Box> }><Box backgroundColor="primary">This is box</Box></Collapse>
</React.Fragment>
```

## Props

| Name        | Type   | Options | Default | Description                                                                                                                                                                                                   |
| :---------- | :----- | :-----: | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| headerTitle | String |         |         | To use the dafault view, enter the collapse heading title. Or you could also pass a custom component. For the purpose of aria-label, you will need to pass headerTitle as a prop within the custom component. |
| id          | String |         |         | This is mandatory and this id will be used to reference aria attributes between the collapse header and the content.                                                                                          |
