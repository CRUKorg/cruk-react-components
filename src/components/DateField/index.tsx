import React, { FC, InputHTMLAttributes } from 'react';

import ErrorText from 'src/components/ErrorText';
import Text from 'src/components/Text';
import TextField from 'src/components/TextField';

import { Fieldset, DateTextFieldWrapper, LargeDateTextFieldWrapper, ErrorTextWrapper } from './styles';

export type DateFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hintText?: string;
  day: string;
  month: string;
  year: string;
  dayName?: string;
  monthName?: string;
  yearName?: string;
  dayHasError?: boolean;
  monthHasError?: boolean;
  yearHasError?: boolean;
  errorMessage?: string;
};

/**
 * To be used in forms entering dates like date of birth which are known dates and would take too long to get to with a date picker
 * */
const DateField: FC<DateFieldProps> = ({
  label,
  hintText,
  day,
  month,
  year,
  dayName = 'day',
  monthName = 'month',
  yearName = 'year',
  dayHasError,
  monthHasError,
  yearHasError,
  errorMessage,
  onChange = () => {},
  onBlur = () => {},
  onFocus = () => {},
  ...props
}) => {
  return (
    <Fieldset>
      <Text as="legend" textWeight={700} marginBottom="xxs">
        {label}
      </Text>
      {hintText && <Text>{hintText}</Text>}
      <DateTextFieldWrapper>
        <TextField
          label="Day"
          type="text"
          name={dayName}
          required
          maxLength={2}
          autoComplete="bday-day"
          pattern="[0-9]*"
          inputMode="numeric"
          value={day}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          hasError={dayHasError}
        />
      </DateTextFieldWrapper>
      <DateTextFieldWrapper>
        <TextField
          label="Month"
          type="text"
          name={monthName}
          required
          maxLength={2}
          autoComplete="bday-month"
          pattern="[0-9]*"
          inputMode="numeric"
          value={month}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          hasError={monthHasError}
        />
      </DateTextFieldWrapper>
      <LargeDateTextFieldWrapper>
        <TextField
          label="Year"
          type="text"
          name={yearName}
          required
          maxLength={4}
          autoComplete="bday-year"
          pattern="[0-9]*"
          inputMode="numeric"
          value={year}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          hasError={yearHasError}
        />
      </LargeDateTextFieldWrapper>
      {errorMessage && (
        <ErrorTextWrapper>
          <ErrorText>{errorMessage}</ErrorText>
        </ErrorTextWrapper>
      )}
    </Fieldset>
  );
};

export default DateField;
