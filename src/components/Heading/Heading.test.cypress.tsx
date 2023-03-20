/// <reference types="cypress" />

import React from "react";
import { mount } from "cypress/react";

import TestWrapper, { TestThemeWrapper } from "../TestWrapper";
import { Heading, crukTheme, su2cTheme, bowelbabeTheme } from "..";

const content = () => (
  <>
    <Heading>H2 is the default</Heading>
    <Heading h2 textSize="xxxxl" textColor="primary">
      This is H2 with H1 size
    </Heading>
    <Heading h1>This is H1 heading</Heading>
    <Heading h2>This is H2 heading</Heading>
    <Heading h3 textColor="#ff00ff">
      This is H3 heading
    </Heading>
    <Heading h4>This is H4 heading</Heading>
    <Heading h5>This is H5 heading</Heading>
    <Heading h6>This is H6 heading</Heading>
    <Heading textAlign="center">This is center aligned</Heading>
    <Heading textAlign="right">This is right aligned</Heading>
  </>
);

describe("Heading", () => {
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

  it("is accessible Bowelbabe theme", () => {
    mount(
      <TestThemeWrapper theme={bowelbabeTheme}>{content()}</TestThemeWrapper>
    );
    cy.injectAxe();
    cy.checkA11y("body");
  });

  it("should match snapshot", () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.get("body").first().matchImageSnapshot();
  });
});
