/// <reference types="cypress" />

import React from "react";
import { mount } from "cypress/react";

import { TestThemeWrapper } from "../AllThemesWrapper";
import {
  Footer,
  Link,
  crukTheme,
  su2cTheme,
  bowelbabeTheme,
  rflTheme,
} from "..";

const content = () => (
  <>
    <Footer middleSection="Cancer Research UK is a registered charity in England and Wales (1089464), Scotland (SC041666), the Isle of Man (1103) and Jersey (247). A company limited by guarantee. Registered company in England and Wales (4325234) and the Isle of Man (5713F).">
      <Link
        appearance="secondary"
        href="https://www.cancerresearchuk.org/about-us/contact-us"
      >
        Contact us
      </Link>
      <Link
        appearance="secondary"
        href="https://www.cancerresearchuk.org/privacy-statement"
      >
        Privacy
      </Link>
    </Footer>
  </>
);

describe("Footer", () => {
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
