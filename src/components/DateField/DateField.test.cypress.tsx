/// <reference types="cypress" />

import React from "react";
import { mount } from "cypress/react";

import { TestThemeWrapper } from "../AllThemesWrapper";
import {
  Box,
  DateField,
  su2cTheme,
  crukTheme,
  bowelbabeTheme,
  rflTheme,
} from "..";

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
      onChange={() => {}}
      onBlur={() => {}}
      onFocus={() => {}}
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

describe("DateField", () => {
  it("is accessible CRUK theme", () => {
    mount(
      <TestThemeWrapper theme={crukTheme}>
        {unControlledContent()}
      </TestThemeWrapper>
    );
    cy.injectAxe();
    cy.checkA11y("body");
  });

  it("is accessible RFL theme", () => {
    mount(
      <TestThemeWrapper theme={rflTheme}>
        {unControlledContent()}
      </TestThemeWrapper>
    );
    cy.injectAxe();
    cy.checkA11y("body");
  });

  it("is accessible SU2C theme", () => {
    mount(
      <TestThemeWrapper theme={su2cTheme}>
        {unControlledContent()}
      </TestThemeWrapper>
    );
    cy.injectAxe();
    cy.checkA11y("body", {
      rules: {
        "color-contrast": { enabled: false }, // TODO disabled because brand does not pass WCAG AA.
      },
    });
  });

  it("is accessible Bowelbabe theme", () => {
    mount(
      <TestThemeWrapper theme={bowelbabeTheme}>
        {unControlledContent()}
      </TestThemeWrapper>
    );
    cy.injectAxe();
    cy.checkA11y("body");
  });
});
