/// <reference types="cypress" />

import React from "react";
import { mount } from "cypress/react";

import TestWrapper, { TestThemeWrapper } from "../TestWrapper";
import { Box, Text, crukTheme, su2cTheme } from "..";

const content = () => (
  <>
    <Box>This is box</Box>
    <Box backgroundColor="primary">
      <Text textColor="textLight">This is box</Text>
    </Box>
    <Box backgroundColor="secondary">
      <Text textColor="textLight">This is box</Text>
    </Box>
    <Box backgroundColor="secondary">
      <Text textColor="textLight">default spacing</Text>
    </Box>
    <Box backgroundColor="secondary" paddingVertical="xl" paddingBottom="xs">
      <Text textColor="textLight">{`paddingVertical="xl" paddingBottom="xs"`}</Text>
    </Box>
    <Box backgroundColor="primary" marginVertical="l" marginLeft="s">
      <Text textColor="textLight">{`marginVertical="l" marginLeft="s"`}</Text>
    </Box>
  </>
);

describe("Box", () => {
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
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.document().its("fonts.status").should("equal", "loaded");
    cy.get("body").first().matchImageSnapshot();
  });
});
