/// <reference types="cypress" />

import React from "react";
import { mount } from "cypress/react";

import { TestThemeWrapper } from "../AllThemesWrapper";
import {
  bowelbabeTheme,
  Box,
  Checkbox,
  crukTheme,
  rflTheme,
  su2cTheme,
} from "..";

const unControlledContent = () => (
  <>
    <Box>
      <Checkbox name="example" value="one" checked>
        Option one
      </Checkbox>
    </Box>
    <Box>
      <Checkbox name="example" value="two">
        Option two
      </Checkbox>
    </Box>
  </>
);

describe("Checkbox", () => {
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

  it("should be able to select a checkbox", () => {
    mount(
      <TestThemeWrapper theme={crukTheme}>
        {unControlledContent()}
      </TestThemeWrapper>
    );
    cy.contains("Option two").click();
    cy.getInputByLabel("Option two").should("be.checked");
  });
});
