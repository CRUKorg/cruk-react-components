# DateField

To be used in forms entering dates like date of birth which are known dates and would take too long to get to with a date picker

### Try it out

```.jsx
function () {

  const initialBirthdayFromServer = '1980-12-07'

  const [birthdayString, setBirthdayString] = React.useState(initialBirthdayFromServer);

  const [dateState, setDateState] = React.useState({
    birthDay: initialBirthdayFromServer ? new Date(initialBirthdayFromServer).getDate().toString() : null,
    birthMonth: initialBirthdayFromServer ? (new Date(initialBirthdayFromServer).getMonth() + 1).toString() : null,
    birthYear: initialBirthdayFromServer ? new Date(initialBirthdayFromServer).getFullYear().toString() : null,
  });

  const [birthValidationMessage, setBirthValidationMessage] = React.useState('');

  // updates date state when there is a change in any date component
  const handeDateChanged = (e) => {
    const input = e.target;
    setDateState({ ...dateState, [`${input.name}`]: input.value });
  };

  // validate birth on blur
  const handleBirthDateBlur = () => {
    const now = new Date();
    const birthDate = new Date(`${dateState.birthYear}-${dateState.birthMonth}-${dateState.birthDay}`);
    const birthValid = birthDate instanceof Date && !isNaN(birthDate.getTime());
    if (!birthValid) {
      setBirthValidationMessage('Please enter a valid date');
    } else if (birthDate.getTime() > now.getTime()) {
      setBirthValidationMessage('All dates must be in the past');
    } else {
      setBirthValidationMessage('');
    }
  };

  // we don't want to show the error message
  // when people are still hopping from date to month to year
  const handleBirthDateFocus = (e) => {
    setBirthValidationMessage('');
  };

  const handleSubmit = () => {
    //don't do anything if invalid
    if(!!birthValidationMessage.length) {
      setBirthdayString('')
      return
    }
    const birthDate = new Date(`${dateState.birthYear}-${dateState.birthMonth }-${dateState.birthDay}`);
    setBirthdayString(birthDate.toISOString().split('T')[0])
  }

  return (
    <>
      <Box>
        <Box>
        <DateField
          dayName='birthDay'
          monthName='birthMonth'
          yearName='birthYear'
          day={dateState.birthDay || ''}
          month={dateState.birthMonth || ''}
          year={dateState.birthYear || ''}
          label='When were they born?'
          onChange={handeDateChanged}
          onBlur={handleBirthDateBlur}
          onFocus={handleBirthDateFocus}
          errorMessage={!!birthValidationMessage.length ? birthValidationMessage : undefined}
        />
        </Box>

        <Box>
          <Button role="button" onClick={handleSubmit}>Go</Button>
        </Box>
        <Text>Birthday:</Text>
        <Text>{!birthValidationMessage.length ? birthdayString : null}</Text>
      </Box>
    </>
  )
}
```

## Props

| Name          | Type                 | Options | Default   | Description                                                                                                       |
| :------------ | :------------------- | :-----: | :-------- | :---------------------------------------------------------------------------------------------------------------- |
| label         | String               |         |           | label is the content of the legend of the fieldset that wraps the input components                                |
| day           | String               |         |           | value of day input                                                                                                |
| month         | String               |         |           | value of month input                                                                                              |
| year          | String               |         |           | value of year input                                                                                               |
| hintText      | String               |         | undefined | (Optional) Additional text that appears below the label                                                           |
| dayName       | String               |         | 'day'     | (Optional) name attribute of day input field                                                                      |
| monthName     | String               |         | 'month'   | (Optional) name attribute of month input field                                                                    |
| monthName     | String               |         | 'year'    | (Optional) name attribute of month input field                                                                    |
| dayHasError   | String               |         | undefined | (Optional) shows error styling on day input                                                                       |
| monthHasError | String               |         | undefined | (Optional) shows error styling on month input                                                                     |
| yearHasError  | String               |         | undefined | (Optional) shows error styling on year input                                                                      |
| errorMessage  | String               |         | undefined | (Optional) error message string displayed underneath all inputs                                                   |
| onChange      | (e:ChangeEvent) =>{} |         |           | (Optional) handler of change event, even though this is optional you really need this as this is controlled input |
| onBlur        | (e:FocusEvent) => {} |         |           | (Optional) handler of blur event, ideal for validation                                                            |
| onFocus       | (e:FocusEvent) => {} |         |           | (Optional) handler of focus event, ideal for clearing validation                                                  |

## Accessibility

The usual pattern is to validate on blur and remove validation message on focus
