# Totaliser

Think Blue Peter, used to display total rasised and if target prop is passed will display tercentage of target reached.

### Try them out

```.jsx
function () {
  const [target, setTarget] = React.useState(6);

  return (
    <>
      <Totaliser total="22.5" giftAid="10.55" />
      <Totaliser total="0.01" target="100" />
      <Totaliser total="99.99" target="100" giftAid="25" />
      <Totaliser total="32" target="100" giftAid="6.4" isCompact />
      <Totaliser
        total="120"
        giftAid="27.5"
        target="100"
        summary={(target, percentage) => `${percentage}% of your ${target} 🎯`}
      />
    </>
  )
}
```

## Props

| Name      | Type     | Options | Default                                                             | Description                                                                                                                                                                     |
| :-------- | :------- | :-----: | :------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| giftAid   | Number   |         | 0                                                                   | Gift aid amount in pounds                                                                                                                                                       |
| isCompact | Boolean  |         | false                                                               | Toggle compact and full view mode.                                                                                                                                              |
| summary   | Function |         | (target, percentage) => `` `${percentage}% of £${target} target` `` | A function that is passed two params, target and percentage, that must return a renderable element following the render prop pattern https://reactjs.org/docs/render-props.html |
| target    | Number   |         | null                                                                | Value used to work out percentage of target reached                                                                                                                             |
| total     | Number   |         |                                                                     | Total in pounds                                                                                                                                                                 |

## An over the top example

```.jsx
function () {
  const props = {target: 20}
  const [target, setTarget] = React.useState(props.target);
  const [isEditing, setIsEditing] = React.useState(false);
  const toggleIsEditing = () => setIsEditing(!isEditing);
  const handleChange = (e) => setTarget(e.target.value);
  const handleSubmit = () => {
    alert(`Your target is ${target}`);
    toggleIsEditing();
  };
  const handleCancel = () => {
    setTarget(props.target);
    toggleIsEditing();
  }

  const summary = (target, percentage) => (
    <>
      {!isEditing &&
        <Button appearance="text" aria-label="edit" onClick={toggleIsEditing}>
          <Icon name="edit"/>
        </Button>
      }
      Awesome you have raised {percentage}% of your £
      {isEditing
        ? <input type="number" value={target} onChange={handleChange}/>
        : target
      } target
    </>
  );

  return (
    <>
      <Totaliser
        giftAid="2.5"
        target={target}
        summary={summary}
        total="10"
      />
      {isEditing &&
        <>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button appearance="primary" onClick={handleSubmit}>Save</Button>
        </>
      }
    </>
  )
}
```
