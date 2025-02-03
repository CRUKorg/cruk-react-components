# Totaliser

Think Blue Peter, used to display total raised and if target prop is passed will display tercentage of target reached.

### Try them out

```.jsx
function () {
  const [target, setTarget] = React.useState(6);

  return (
    <>
      <Box>
        <Totaliser total={22.5} giftAid={10.55} />
      </Box>
      <Box>
        <Totaliser total={0.01} target={100} />
      </Box>
      <Box>
        <Totaliser total={99.99} target={100} giftAid={25} />
      </Box>
      <Box>
        <Totaliser total={32} target={100} giftAid={6.4} isCompact />
      </Box>
      <Box>
        <Totaliser
          total={120}
          giftAid={27.5}
          target={100}
          summaryMessage={<Text>Custom summary message</Text>}
        />
      </Box>
      <Box>
        <Totaliser
          total={120}
          giftAid={27.5}
          target={100}
          summaryMessage='Custom summary message'
        />
      </Box>
    </>
  )
}
```

## Props

| Name           | Type                  | Options | Default                                               | Description                                                       |
| :------------- | :-------------------- | :-----: | :---------------------------------------------------- | :---------------------------------------------------------------- |
| giftAid        | Number                |         | 0                                                     | Gift aid amount in pounds                                         |
| isCompact      | Boolean               |         | false                                                 | Toggle compact and full view mode.                                |
| summaryMessage | ReactElement / String |         | Component which shows percentage value of total value | A string or component that renders at the bottom of the totaliser |
| target         | Number                |         | null                                                  | Value used to work out percentage of target reached               |
| total          | Number                |         |                                                       | Total in pounds                                                   |

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

  const summary = (target, total) => {

    const  percentage = (total / target) * 100;
    return (<div>
      {!isEditing &&
        <Button appearance="tertiary" aria-label="edit" onClick={toggleIsEditing}>
          <Icon name="edit"/>
        </Button>
      }
      Awesome you have raised {parseInt(percentage)}% of your £{isEditing
        ? <input type="number" value={target} onChange={handleChange}/>
        : target
      } target
    </div>
  )};

  return (
    <Box>
      <Totaliser
        giftAid="2.5"
        target={target}
        summaryMessage={summary(target, 10)}
        total="10"
      />
      {isEditing &&
        <>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button appearance="primary" onClick={handleSubmit}>Save</Button>
        </>
      }
    </Box>
  )
}
```
