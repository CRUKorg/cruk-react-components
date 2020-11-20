# Collapse

Use a collapse component to show and hide content. It has a default view; however, it can be overwritten by passing a custom component as a prop.

### Try them out

```.jsx
<>
    <Collapse headerTitleText="What is Lorem Ipsum?" id="default">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </Collapse>

    <Collapse
      headerTitleTextColor="primary"
      headerTitleTextSize="extraLarge"
      headerTitleText="A long title with headerTitleTextColor and headerTitleTextSize"
      id="1"
    >
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
    </Collapse>

    <Collapse id="custom" headerTitleText="Custom header components"  headerComponent={
      <Box backgroundColor="primary">
        <Text textColor="textLight">
          This is box header
        </Text>
      </Box>
    }>
      <Box backgroundColor="primary">
        <Text textColor="textLight">
          This is box
        </Text>
      </Box>
    </Collapse>
</>
```

## Props

| Name            | Type                    | Options | Default   | Description                                                                                                          |
| :-------------- | :---------------------- | :-----: | :-------- | :------------------------------------------------------------------------------------------------------------------- |
| id              | String                  |         |           | This is mandatory and this id will be used to reference aria attributes between the collapse header and the content. |
| headerTitleText | String                  |         |           | Header text. If you pass a custom component this text is still need as it will be used for the aria-label            |
| headerComponent | ReactNode               |         | undefined | (optinal) Custom header component                                                                                    |
| startOpen       | boolean                 |         | false     | (optional) starting value for collapse open state                                                                    |
| onOpenChange    | (isOpen: boolean) => {} |         |           | (optional) open changed callback                                                                                     |
