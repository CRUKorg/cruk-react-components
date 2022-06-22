/// <reference types="cypress" />

import React from "react";
import { mount } from "@cypress/react";

import TestWrapper, { TestThemeWrapper } from "../TestWrapper";
import { Box, Checkbox, crukTheme, su2cTheme } from "..";

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

  it("should match snapshot", () => {
    Cypress.config("waitForAnimations", true);
    Cypress.config("animationDistanceThreshold", 1);
    mount(<TestWrapper>{unControlledContent()}</TestWrapper>);
    cy.document().its("fonts.status").should("equal", "loaded");
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);
    cy.get("body").first().matchImageSnapshot({
      failureThresholdType: "pixel",
      failureThreshold: 100,
    });
  });
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
