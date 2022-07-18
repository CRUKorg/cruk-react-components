import React, { InputHTMLAttributes } from "react";

import ErrorText from "../ErrorText";
import Text from "../Text";
import TextField from "../TextField";

import {
  Fieldset,
  DateTextFieldWrapper,
  LargeDateTextFieldWrapper,
  ErrorTextWrapper,
} from "./styles";

export type DateFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  /** label text */
  label: string;
  /** hind text */
  hintText?: string;
  /** day field text value  */
  day: string;
  /** month field text value  */
  month: string;
  /** year field text value  */
  year: string;
  /** name passed to day field input element */
  dayName?: string;
  /** name passed to month field input element */
  monthName?: string;
  /** name passed to year field input element */
  yearName?: string;
  /** flag of error styling on day field */
  dayHasError?: boolean;
  /** flag of error styling on month field */
  monthHasError?: boolean;
  /** flag of error styling on year field */
  yearHasError?: boolean;
  /** error message text */
  errorMessage?: string;
};

/**
 * To be used in forms entering dates like date of birth which are known dates and would take too long to get to with a date picker
 * */
const DateField = ({
  label,
  hintText,
  day,
  month,
  year,
  dayName = "day",
  monthName = "month",
  yearName = "year",
  dayHasError,
  monthHasError,
  yearHasError,
  errorMessage,
  onChange = () => {},
  onBlur = () => {},
  onFocus = () => {},
  disabled,
  required,
}: DateFieldProps) => (
  <Fieldset>
    <Text as="legend" textWeight={700} marginBottom="xxs">
      {label} {!!required && ` (required)`}
    </Text>
    {hintText && <Text>{hintText}</Text>}
    <DateTextFieldWrapper>
      <TextField
        label="Day"
        type="text"
        name={dayName}
        required={!!required}
        hideRequiredInLabel
        maxLength={2}
        autoComplete="bday-day"
        pattern="[0-9]*"
        inputMode="numeric"
        value={day}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        hasError={dayHasError}
        disabled={disabled}
      />
    </DateTextFieldWrapper>
    <DateTextFieldWrapper>
      <TextField
        label="Month"
        type="text"
        name={monthName}
        required={!!required}
        hideRequiredInLabel
        maxLength={2}
        autoComplete="bday-month"
        pattern="[0-9]*"
        inputMode="numeric"
        value={month}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        hasError={monthHasError}
        disabled={disabled}
      />
    </DateTextFieldWrapper>
    <LargeDateTextFieldWrapper>
      <TextField
        label="Year"
        type="text"
        name={yearName}
        required={!!required}
        hideRequiredInLabel
        maxLength={4}
        autoComplete="bday-year"
        pattern="[0-9]*"
        inputMode="numeric"
        value={year}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        hasError={yearHasError}
        disabled={disabled}
      />
    </LargeDateTextFieldWrapper>
    {errorMessage && (
      <ErrorTextWrapper>
        <ErrorText marginTop="xxs">{errorMessage}</ErrorText>
      </ErrorTextWrapper>
    )}
  </Fieldset>
);

export default DateField;
