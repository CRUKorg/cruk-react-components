/// <reference types="cypress" />

import React from "react";
import { mount } from "@cypress/react";

import TestWrapper, { TestThemeWrapper } from "../TestWrapper";
import { Header, Button, crukTheme, su2cTheme } from "..";

const content = () => (
  <Header siteSlogan="Header slogan here">
    <Button>Child component</Button>
  </Header>
);

describe("Header Behaviour", () => {
  beforeEach(() => {
    cy.viewport(2000, 200);
    mount(
      <Header siteSlogan="Header slogan here">
        <Button>Child component</Button>
      </Header>
    );
  });

  it("should scroll to main content", () => {
    cy.tab();
    cy.focused().should("have.text", "Skip to main content");
    // can't test further than this without a page with some junk above main content
  });

  it("should alt text in link in logo image", () => {
    cy.tab();
    cy.tab();
    cy.focused()
      .find("img")
      .should("have.attr", "alt", "Cancer Research UK Giving Page");
  });

  it("should go to link in logo", () => {
    cy.tab();
    cy.tab();
    cy.focused().should("have.attr", "href", "/");
  });

  it("should stick to the top of the page", () => {
    cy.get("header")
      .find('[data-cy="header-sticky-container"]')
      .should("have.css", "height", "120px")
      .should("have.css", "position", "relative");
  });
});

describe("Header Sticky Behaviour", () => {
  beforeEach(() => {
    cy.viewport(2000, 200);
    mount(
      <>
        <Header siteSlogan="Header slogan here" isSticky>
          <Button>Child component</Button>
        </Header>
        <div
          className="making-a-tall-scroll-able-page"
          style={{ height: 2000 }}
        />
      </>
    );
  });

  it("should reduce to smaller height when not at top of page", () => {
    cy.window().scrollTo(0, 800);
    cy.get("header")
      .find('[data-cy="header-sticky-container"]')
      .should("have.css", "height", "72px")
      .should("have.css", "position", "fixed")
      .should("have.css", "top", "0px");
  });
});

describe("Header", () => {
  it("is accessible cruk", () => {
    cy.viewport(1000, 480); // desktop breakpoint for full size header
    mount(
      <TestThemeWrapper theme={crukTheme}>
        <Header siteSlogan="Header slogan here">
          <Button>Child component</Button>
        </Header>
        <div id="main" tabIndex={-1}>
          blah
        </div>
      </TestThemeWrapper>
    );
    cy.injectAxe();
    cy.checkA11y("body");
  });

  it("is accessible su2c", () => {
    cy.viewport(1000, 480); // desktop breakpoint for full size header
    mount(
      <TestThemeWrapper theme={su2cTheme}>
        <Header siteSlogan="Header slogan here">
          <Button>Child component</Button>
        </Header>
        <div id="main" tabIndex={-1}>
          blah
        </div>
      </TestThemeWrapper>
    );
    cy.injectAxe();
    cy.checkA11y("body", {
      rules: {
        "color-contrast": { enabled: false }, // TODO disabled because SU2C links do not pass WCAG AA.
      },
    });
  });

  it("should match snapshot", () => {
    Cypress.config("waitForAnimations", true);
    Cypress.config("animationDistanceThreshold", 2);
    cy.viewport(1000, 480);
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.get(`[src="${crukTheme.siteConfig.assetPath}images/logos/cruk-160.png"]`)
      .should("be.visible")
      .and("have.prop", "naturalWidth")
      .should("be.greaterThan", 0);
    cy.get(`[src="${crukTheme.siteConfig.assetPath}images/logos/su2c-160.png"]`)
      .should("be.visible")
      .and("have.prop", "naturalWidth")
      .should("be.greaterThan", 0);
    cy.document().its("fonts.status").should("equal", "loaded");
    cy.get("body").first().matchImageSnapshot();
  });
});
