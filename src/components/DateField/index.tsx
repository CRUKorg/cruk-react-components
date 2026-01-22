import React, { type InputHTMLAttributes } from "react";

import { ErrorText } from "../ErrorText";
import { Text } from "../Text";
import { TextField } from "../TextField";

/**
 * To be used in forms entering dates like date of birth which are known dates and would take too long to get to with a date picker
 * */
export function DateField({
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
  onChange = () => {
    // no op
  },
  onBlur = () => {
    // no op
  },
  onFocus = () => {
    // no op
  },
  disabled,
  required,
}: InputHTMLAttributes<HTMLInputElement> & {
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
}) {
  return (
    <fieldset className="component-date-field">
      <legend>
        {label}
        {!required && (
          <span
            style={{
              fontWeight: "var(--typ-font-weight-base, 300)",
            }}
          >
            {` (optional)`}
          </span>
        )}
      </legend>
      {hintText && <Text textColor="text-mid">{hintText}</Text>}
      <div className="date-text-field-wrapper">
        <TextField
          label="Day"
          type="text"
          name={dayName}
          required={!!required}
          hideRequiredIndicationInLabel
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
      </div>
      <div className="date-text-field-wrapper">
        <TextField
          label="Month"
          type="text"
          name={monthName}
          required={!!required}
          hideRequiredIndicationInLabel
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
      </div>
      <div className="large-date-text-field-wrapper">
        <TextField
          label="Year"
          type="text"
          name={yearName}
          required={!!required}
          hideRequiredIndicationInLabel
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
      </div>
      {errorMessage && (
        <div className="error-text-wrapper">
          <ErrorText marginTop="xxs">{errorMessage}</ErrorText>
        </div>
      )}
    </fieldset>
  );
}

export default DateField;
