/// <reference types="cypress" />

import React from "react";
import { mount } from "@cypress/react";

import TestWrapper, { TestThemeWrapper } from "../TestWrapper";
import { Badge, Icon, su2cTheme, crukTheme } from "../";

const content = () => {
  return (
    <>
      <Badge>
        <Icon name="poundSign" />
      </Badge>
      <Badge backgroundColor="secondary">
        <Icon name="search" />
      </Badge>
      <Badge backgroundColor="tertiary">
        <Icon name="eventName" />
      </Badge>
      <Badge backgroundColor="#8bc34a">2</Badge>
      <Badge
        backgroundColor="textLight"
        textColor="tertiary"
        borderColor="tertiary"
      >
        <Icon name="comment" />
      </Badge>
      <Badge>This is text</Badge>
    </>
  );
};

describe("Badge", () => {
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
