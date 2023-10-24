/// <reference types="cypress" />

import React from "react";
import { mount } from "cypress/react";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

import { TestThemeWrapper } from "../AllThemesWrapper";
import {
  bowelbabeTheme,
  crukTheme,
  IconFa,
  InfoBox,
  rflTheme,
  su2cTheme,
  Text,
} from "..";

const content = () => (
  <>
    <InfoBox
      titleText="InfoBox With Children"
      titleTextColor="#000"
      descriptionText="This is a description block for the infobox with children"
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
