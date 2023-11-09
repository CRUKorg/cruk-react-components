/// <reference types="cypress" />

import React from "react";
import { mount } from "cypress/react";

import { TestThemeWrapper } from "../AllThemesWrapper";
import { Box, Text, crukTheme, su2cTheme, bowelbabeTheme, rflTheme } from "..";

const content = () => (
  <>
    <Box>This is box</Box>
    <Box backgroundColor="primary">
      <Text textColor="textLight">This is box</Text>
    </Box>
    <Box backgroundColor="secondary">
      <Text textColor="textOnSecondary">This is box</Text>
    </Box>
    <Box backgroundColor="secondary">
      <Text textColor="textOnSecondary">default spacing</Text>
    </Box>
    <Box backgroundColor="secondary" paddingVertical="xl" paddingBottom="xs">
      <Text textColor="textOnSecondary">{`paddingVertical="xl" paddingBottom="xs"`}</Text>
    </Box>
    <Box backgroundColor="primary" marginVertical="l" marginLeft="s">
      <Text textColor="textOnPrimary">{`marginVertical="l" marginLeft="s"`}</Text>
    </Box>
  </>
);

describe("Box", () => {
  it("is accessible CRUK theme", () => {
    mount(<TestThemeWrapper theme={crukTheme}>{content()}</TestThemeWrapper>);
    cy.injectAxe();
    cy.checkA11y("body");
  });

  it("is accessible RFL theme", () => {
    mount(<TestThemeWrapper theme={rflTheme}>{content()}</TestThemeWrapper>);
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
