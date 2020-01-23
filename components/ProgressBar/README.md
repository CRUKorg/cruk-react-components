# Progress bar

Provide up-to-date feedback on the progress of a workflow or action with
simple yet flexible progress bars.

### Try them out

```.jsx
<React.Fragment>
  <ProgressBar percentage="0" />
  <ProgressBar percentage="20" />
  <ProgressBar percentage="150" />
  <ProgressBar percentage="0" isCircular />
  <ProgressBar percentage="20" isCircular />
  <ProgressBar percentage="150" isCircular />
</React.Fragment>
```

## Props

| Name | Type | Options | Default | Description |
| :- | :- | :-: | :- | :- |
| percentage | Number | between 0 - 100 | 0 | Current value of progress  |
| isCircular | Boolean | | false | Default to linear progress |
