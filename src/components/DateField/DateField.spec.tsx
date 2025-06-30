import React from "react";

import { testAccessibilityOnAllThemes } from "playwright/utils";

import { DateField } from ".";
import { Box } from "..";

const unControlledContent = () => (
  <Box backgroundColor="backgroundLight">
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

testAccessibilityOnAllThemes({
  componentName: "DateField",
  component: unControlledContent,
});
