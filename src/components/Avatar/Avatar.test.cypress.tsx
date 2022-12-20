/// <reference types="cypress" />

import React from "react";
import { mount } from "@cypress/react";

import theme from "src/themes/cruk";
import TestWrapper, { TestThemeWrapper } from "../TestWrapper";
import { Avatar, crukTheme, su2cTheme } from "..";

const content = () => (
  <>
    <Avatar />
    <Avatar name="Sam" size="s" alt="sam's profile" />
    <Avatar name="Sam" size="m" alt="sam's profile" />
    <Avatar name="Sam" size="l" alt="sam's profile" />
    <Avatar name="Sam" size="xl" alt="sam's profile" />
    <Avatar
      name="Sam"
      alt="sam's profile"
      url={`${crukTheme.siteConfig.assetPath}images/logos/cruk-160.png`}
    />
  </>
);

describe("Avatar", () => {
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
    cy.get(
      `[src="${crukTheme.siteConfig.assetPath}images/logos/cruk-160.png"]`
    ).should(($img) => {
      const img = $img[0] as HTMLImageElement;
      expect(img.naturalWidth).to.be.greaterThan(0);
    });
    cy.get(
      `[src="${theme.siteConfig.assetPath}images/avatar/cruk/icon-avatar-S.png"]`
    ).should(($img) => {
      const img = $img[0] as HTMLImageElement;
      expect(img.naturalWidth).to.be.greaterThan(0);
    });
    cy.get(
      `[src="${theme.siteConfig.assetPath}images/avatar/su2c/icon-avatar-S.png"]`
    ).should(($img) => {
      const img = $img[0] as HTMLImageElement;
      expect(img.naturalWidth).to.be.greaterThan(0);
    });
    cy.get(
      `[src="${theme.siteConfig.assetPath}images/avatar/cruk/icon-avatar-Anonymous.png"]`
    ).should(($img) => {
      const img = $img[0] as HTMLImageElement;
      expect(img.naturalWidth).to.be.greaterThan(0);
    });
    cy.get(
      `[src="${theme.siteConfig.assetPath}images/avatar/su2c/icon-avatar-Anonymous.png"]`
    ).should(($img) => {
      const img = $img[0] as HTMLImageElement;
      expect(img.naturalWidth).to.be.greaterThan(0);
    });
    cy.document().its("fonts.status").should("equal", "loaded");
    cy.get("body").first().matchImageSnapshot();
  });
});
