/// <reference types="cypress" />

import React from "react";
import { mount } from "cypress/react";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

import TestWrapper, { TestThemeWrapper } from "../TestWrapper";
import {
  bowelbabeTheme,
  crukTheme,
  IconFa,
  InfoBox,
  su2cTheme,
  Text,
} from "..";

const content = () => (
  <>
    <InfoBox
      titleText="InfoBox With Children"
      titleTextColor="#000"
      descriptionText="This is a description block for the infobox with childrens"
      descriptionTextColor="#000"
      icon={<IconFa faIcon={faTriangleExclamation} color="danger" size="2em" />}
    >
      <Text color="#000" marginBottom="xs">
        This is children text block for infobox component
      </Text>
    </InfoBox>
  </>
);

describe("IconFa", () => {
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
    cy.document().its("fonts.status").should("equal", "loaded");
    cy.get("body").first().matchImageSnapshot();
  });
});