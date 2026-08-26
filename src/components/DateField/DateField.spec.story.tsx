import React from "react";

import { Box } from "..";
import { DateField } from ".";
import "./styles.css";
import "../ErrorText/styles.css";

export default {};
export const Component = () => (
  <Box backgroundColor="background-light" padding="s">
    <DateField
      dayName="birthDay"
      monthName="birthMonth"
      yearName="birthYear"
      day="01"
      month="07"
      year="1990"
      label="When were they born?"
      onChange={() => {
        // onChange
      }}
      onBlur={() => {
        // onBlur
      }}
      onFocus={() => {
        // onFocus
      }}
      errorMessage="invalid birthday"
    />
    <DateField
      day="01"
      month="07"
      year="1990"
      label="Date with all fields with errors"
      dayHasError
      monthHasError
      yearHasError
      errorMessage="Day month and year invalid"
    />
  </Box>
);

export const CrukTheme = () => (
  <main data-theme="cruk">
    <Component />
  </main>
);

export const RflTheme = () => (
  <main data-theme="rfl">
    <Component />
  </main>
);

export const Su2cTheme = () => (
  <main data-theme="su2c">
    <Component />
  </main>
);

export const BowelbabeTheme = () => (
  <main data-theme="bowelbabe">
    <Component />
  </main>
);
