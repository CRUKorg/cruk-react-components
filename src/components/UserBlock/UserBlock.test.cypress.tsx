/// <reference types="cypress" />

import React from "react";
import { mount } from "@cypress/react";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import TestWrapper, { TestThemeWrapper } from "../TestWrapper";
import { UserBlock, IconFa, su2cTheme, crukTheme } from "..";

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
      avatarUrl="https://via.placeholder.com/300/2e008b/d9318a?text=avatar"
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
    mount(
      <>
        <TestWrapper>{content()}</TestWrapper>
        <TestThemeWrapper theme={su2cTheme}>{content()}</TestThemeWrapper>
      </>
    );
    cy.get(
      '[src="https://via.placeholder.com/300/2e008b/d9318a?text=avatar"]'
    ).should(($img) => {
      const img = $img[0] as HTMLImageElement;
      expect(img.naturalWidth).to.be.greaterThan(0);
    });
    cy.get(
      `[src="${crukTheme.siteConfig.assetPath}images/avatar/cruk/icon-avatar-S.png"]`
    ).should(($img) => {
      const img = $img[0] as HTMLImageElement;
      expect(img.naturalWidth).to.be.greaterThan(0);
    });
    cy.get(
      `[src="${crukTheme.siteConfig.assetPath}images/avatar/su2c/icon-avatar-S.png"]`
    ).should(($img) => {
      const img = $img[0] as HTMLImageElement;
      expect(img.naturalWidth).to.be.greaterThan(0);
    });
    cy.get(
      `[src="${crukTheme.siteConfig.assetPath}images/avatar/cruk/icon-avatar-Anonymous.png"]`
    ).should(($img) => {
      const img = $img[0] as HTMLImageElement;
      expect(img.naturalWidth).to.be.greaterThan(0);
    });
    cy.get(
      `[src="${crukTheme.siteConfig.assetPath}images/avatar/su2c/icon-avatar-Anonymous.png"]`
    ).should(($img) => {
      const img = $img[0] as HTMLImageElement;
      expect(img.naturalWidth).to.be.greaterThan(0);
    });
    cy.document().its("fonts.status").should("equal", "loaded");
    cy.get("body").first().matchImageSnapshot();
  });
});
