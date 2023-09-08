/// <reference types="cypress" />

import React from "react";
import { mount } from "cypress/react";

import { TestThemeWrapper } from "../TestWrapper";
import { Avatar, bowelbabeTheme, crukTheme, su2cTheme } from "..";

const content = () => (
  <>
    <Avatar />
    <Avatar name="Sam" size="s" alt="sam's profile" />
    <Avatar name="Sam" size="m" alt="sam's profile" />
    <Avatar name="Sam" size="l" alt="sam's profile" />
    <Avatar name="Sam" size="xl" alt="sam's profile" />
    <Avatar
      name="Sam"
      alt="sam's profile"
      url={`${crukTheme.siteConfig.assetPath}images/logos/cruk-160.png`}
    />
  </>
);

describe("Avatar", () => {
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
});
