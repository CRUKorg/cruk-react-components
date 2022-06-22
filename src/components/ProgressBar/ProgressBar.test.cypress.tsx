/// <reference types="cypress" />

import React from "react";
import { mount } from "@cypress/react";

import TestWrapper, { TestThemeWrapper } from "../TestWrapper";
import { ProgressBar, Text, crukTheme, su2cTheme } from "..";

const content = () => (
  <>
    <ProgressBar percentage={0} />
    <ProgressBar percentage={20} />
    <ProgressBar percentage={150} />
    <ProgressBar percentage={0} isCircular />
    <ProgressBar percentage={20} isCircular />
    <ProgressBar percentage={150} isCircular />
    <ProgressBar
      percentage={60}
      isCircular
      circleSize="10em"
      circleContents={<Text>60 / 100 miles</Text>}
    />
  </>
);

describe("ProgressBar", () => {
  it("is accessible CRUK theme", () => {
    mount(<TestThemeWrapper theme={crukTheme}>{content()}</TestThemeWrapper>);
    cy.injectAxe();
    cy.checkA11y("body");
  });

  it("is accessible SU2C theme", () => {
    mount(<TestThemeWrapper theme={su2cTheme}>{content()}</TestThemeWrapper>);
    cy.injectAxe();
    cy.checkA11y("body", {
      rules: {
        "color-contrast": { enabled: false }, // TODO disabled because brand does not pass WCAG AA.
      },
    });
  });

  it("should match snapshot", () => {
    Cypress.config("waitForAnimations", true);
    Cypress.config("animationDistanceThreshold", 2);
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.document().its("fonts.status").should("equal", "loaded");
    cy.get("body").first().matchImageSnapshot();
  });
});
