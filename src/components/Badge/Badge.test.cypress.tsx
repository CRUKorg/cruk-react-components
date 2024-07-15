/// <reference types="cypress" />

import React from "react";
import { mount } from "cypress/react";
import {
  faPoundSign,
  faSearch,
  faComment,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";

import { TestThemeWrapper } from "../AllThemesWrapper";
import {
  Badge,
  IconFa,
  su2cTheme,
  crukTheme,
  bowelbabeTheme,
  rflTheme,
} from "..";

const content = () => (
  <>
    <Badge>
      <IconFa faIcon={faPoundSign} />
    </Badge>
    <Badge backgroundColor="secondary">
      <IconFa faIcon={faSearch} />
    </Badge>
    <Badge backgroundColor="tertiary">
      <IconFa faIcon={faBullhorn} />
    </Badge>
    <Badge backgroundColor="#8bc34a">2</Badge>
    <Badge
      backgroundColor="textLight"
      textColor="tertiary"
      borderColor="tertiary"
    >
      <IconFa faIcon={faComment} />
    </Badge>
    <Badge>This is text</Badge>
  </>
);

describe("Badge", () => {
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
      <TestThemeWrapper theme={bowelbabeTheme}>{content()}</TestThemeWrapper>,
    );
    cy.injectAxe();
    cy.checkA11y("body");
  });
});
