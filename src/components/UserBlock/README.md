# UserBlock

Display an avatar with title and subtitle

### Try it out

```.jsx
<React.Fragment>
  <UserBlock />
  <UserBlock name="Sam Smith" size="small" />
  <UserBlock name="Sam Smith" size="large" extra={<React.Fragment><Icon name="clock"/>Just now</React.Fragment>} />
  <UserBlock
    name="Sam Smith"
    avatarUrl="https://fundraise.cancerresearchuk.org/profiles/cruk_fundraising/modules/cruk_online_fundraising/images/hero_desktop.jpg"
    extra="(Managed by My Mum)"
  />
</React.Fragment>
```

## Props

| Name | Type | Options | Default | Description |
| :- | :- | :-: | :- | :- |
| name | String | | "Anonymous" | Title to be displayed as primary text |
| extra | String/React node | | | subtitle to be displayed as primary text |
| size | String | "small" "medium" "large" | "medium" | Define the size of the avatar |
| avatarUrl | String | | | URL of  image for avatar |
