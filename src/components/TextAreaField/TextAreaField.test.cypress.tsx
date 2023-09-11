/// <reference types="cypress" />

import React from "react";
import { mount } from "cypress/react";

import { TestThemeWrapper } from "../AllThemesWrapper";
import {
  Box,
  Heading,
  TextAreaField,
  su2cTheme,
  crukTheme,
  bowelbabeTheme,
} from "..";

const content = () => (
  <>
    <section>
      <Heading h3>TextAreaField</Heading>
      <Box>
        <TextAreaField
          label="Tell us more about your fundraising"
          name="firstName"
          defaultValue="I am baking cakes"
        />
      </Box>
    </section>
  </>
);

describe("TextAreaField", () => {
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
