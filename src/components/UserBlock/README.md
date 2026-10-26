# UserBlock

Display an avatar with title and subtitle

### Try it out

```.jsx
<>
  <UserBlock />
  <UserBlock name="Sam Smith" size="s" />
  <UserBlock name="Sam Smith" size="l" extra={<><Icon name="clock"/> Just now</>} />
  <UserBlock
    name="Sam Smith"
    avatarUrl="https://via.placeholder.com/300/2e008b/d9318a?text=avatar"
    extra="(Managed by My Mum)"
  />
</>
```

## Props

| Name      | Type              |   Options   | Default     | Description                              |
| :-------- | :---------------- | :---------: | :---------- | :--------------------------------------- |
| name      | String/React node |             | "Anonymous" | Title to be displayed as primary text    |
| extra     | String/React node |             |             | subtitle to be displayed as primary text |
| size      | String            | "s" "m" "l" | "m"         | Define the size of the avatar            |
| avatarUrl | String            |             |             | URL of image for avatar                  |
