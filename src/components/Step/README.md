# Step

Visually show where a user is in a multi-step process. Calculate the number of steps
and the width of each step required to fit the progress bar in the parent container.

Step display progress through a sequence by breaking it up into multiple logical steps. They may also be used for navigation.


### Try them out

```.jsx
function () {
  const [step, setStep] = React.useState(1);
  const steps = ['Account','Details','Activity','Motivation','Page'];

  return (
    <>
      <Step current="3" steps={['Account','Details','Activity','Motivation','Page']} />
      <Step current="3" steps={['Step1','Step2','Step3','Step4','Step5','Step6']} />
      <Box>
        <Heading h2>Create your Giving Page</Heading>
        <Step current={step} steps={steps} />
        <Heading h1>{steps[step - 1]} Page</Heading>
        <Button onClick={() => setStep(step - 1)}>Prev</Button>
        <Button onClick={() => setStep(step + 1)} appearance="primary">Next</Button>
      </Box>
    </>
  );
}
```

## Props

| Name | Type | Options | Default | Description |
| :- | :- | :-: | :- | :- |
| current | Number |  | 1 | Current value of step  |
| steps | Array | | | Array of data |
| onClick | Function | |  |  |
