# Progress bar

Provide up-to-date feedback on the progress of a workflow or action with
simple yet flexible progress bars.

### Try them out

```.jsx
<>
  <ProgressBar percentage={0} />
  <ProgressBar percentage={20} />
  <ProgressBar percentage={150} />
  <ProgressBar percentage={0} isCircular />
  <ProgressBar percentage={20} isCircular />
  <ProgressBar percentage={150} isCircular />
  <ProgressBar percentage={60} isCircular circleSize="10em" circleContents={<Button>Button</Button>} />
</>
```

## Props

| Name           | Type      |     Options     | Default               | Description                          |
| :------------- | :-------- | :-------------: | :-------------------- | :----------------------------------- |
| percentage     | Number    | between 0 - 100 | 0                     | (required) Current value of progress |
| isCircular     | Boolean   |                 | false                 | Default to linear progress           |
| circleContents | ReactNode |                 | undefined             | Inner contents of circular graph     |
| circleSize     | string    |                 | '90px'                | size of circular graph               |
| barColor       | string    |                 | theme.colors.textDark | Color of graph bar/circle            |
