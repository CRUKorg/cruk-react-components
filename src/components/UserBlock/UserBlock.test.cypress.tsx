/// <reference types="cypress" />

import React from "react";
import { mount } from "cypress/react";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import { TestThemeWrapper } from "../AllThemesWrapper";
import {
  UserBlock,
  IconFa,
  su2cTheme,
  crukTheme,
  bowelbabeTheme,
  rflTheme,
} from "..";

const content = () => (
  <>
    <UserBlock />
    <UserBlock name="Sam Smith" size="s" />
    <UserBlock
      name="Sam Smith"
      size="l"
      extra={
        <>
          <IconFa faIcon={faClock} />
          Just now
        </>
      }
    />
    <UserBlock
      name="Sam Smith"
      avatarUrl={`${crukTheme.siteConfig.assetPath}images/logos/cruk-160.png`}
      extra="(Managed by My Mum)"
    />
  </>
);

describe("UserBlock", () => {
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
