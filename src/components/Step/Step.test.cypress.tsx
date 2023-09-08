/// <reference types="cypress" />

import React from "react";
import { mount } from "cypress/react";

import { TestThemeWrapper } from "../TestWrapper";
import { Step, crukTheme, su2cTheme, bowelbabeTheme } from "..";

const BasicContent = () => (
  <Step
    current={3}
    steps={["Account", "Details", "Activity", "Motivation", "Page"]}
  />
);

describe("Step", () => {
  it("is accessible CRUK theme", () => {
    mount(
      <TestThemeWrapper theme={crukTheme}>
        <BasicContent />
      </TestThemeWrapper>
    );
    cy.injectAxe();
    cy.checkA11y("body");
  });

  it("is accessible SU2C theme", () => {
    mount(
      <TestThemeWrapper theme={su2cTheme}>
        <BasicContent />
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
        <BasicContent />
      </TestThemeWrapper>
    );
    cy.injectAxe();
    cy.checkA11y("body");
  });
});
