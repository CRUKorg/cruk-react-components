/// <reference types="cypress" />

import React from "react";
import { mount } from "@cypress/react";

import TestWrapper, { TestThemeWrapper } from "../TestWrapper";
import { Collapse, Box, Text, crukTheme, su2cTheme } from "../";

const content = () => {
  return (
    <>
      <Collapse headerTitleText="What is Lorem Ipsum?" id="default">
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </Collapse>

      <Collapse
        headerTitleTextColor="primary"
        headerTitleTextSize="xl"
        headerTitleText="A long title with headerTitleTextColor and headerTitleTextSize"
        id="1"
      >
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </Collapse>

      <Collapse
        id="custom"
        headerTitleText="Custom header components"
        headerComponent={
          <Box backgroundColor="primary">
            <Text textColor="textLight">This is box header</Text>
          </Box>
        }
      >
        <Box backgroundColor="primary">
          <Text textColor="textLight">This is box</Text>
        </Box>
      </Collapse>
    </>
  );
};

describe("Collapse", () => {
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
    cy.contains("What is Lorem Ipsum?").click();
    cy.get("body").first().matchImageSnapshot();
  });
});
