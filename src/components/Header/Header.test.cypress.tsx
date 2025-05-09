/// <reference types="cypress" />

import React from "react";
import { mount } from "cypress/react";

import { TestThemeWrapper } from "../AllThemesWrapper";
import {
  Header,
  Button,
  crukTheme,
  su2cTheme,
  bowelbabeTheme,
  rflTheme,
} from "..";
import { ThemeProvider } from "styled-components";

describe("Header Behaviour", () => {
  beforeEach(() => {
    cy.viewport(2000, 200);
    mount(
      <ThemeProvider theme={crukTheme}>
        <Header siteSlogan="Header slogan here">
          <Button>Child component</Button>
        </Header>
      </ThemeProvider>,
    );
  });

  it("should scroll to main content", () => {
    cy.contains("Header slogan here").should("be.visible");
    cy.get("header")
      .find("a")
      .contains("Skip to main content")
      .focus()
      .should("be.visible");

    // can't test further than this without a page with some junk above main content
  });

  it("should alt text in link in logo image", () => {
    cy.contains("Header slogan here").should("be.visible");
    cy.get("header")
      .find("img")
      .should("have.attr", "alt", "Cancer Research UK Giving Page");
  });

  it("should go to link in logo", () => {
    cy.get("header").find("a").last().should("have.attr", "href", "/");
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
        <ThemeProvider theme={crukTheme}>
          <Header siteSlogan="Header slogan here" isSticky>
            <Button>Child component</Button>
          </Header>
          <div
            className="making-a-tall-scroll-able-page"
            style={{ height: 2000 }}
          />
        </ThemeProvider>
      </>,
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
      </TestThemeWrapper>,
    );
    cy.injectAxe();
    cy.checkA11y("body");
  });

  it("is accessible RFL theme", () => {
    mount(
      <TestThemeWrapper theme={rflTheme}>
        <Header siteSlogan="Header slogan here">
          <Button>Child component</Button>
        </Header>
        <div id="main" tabIndex={-1}>
          blah
        </div>
      </TestThemeWrapper>,
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
      </TestThemeWrapper>,
    );
    cy.injectAxe();
    cy.checkA11y("body", {
      rules: {
        "color-contrast": { enabled: false }, // TODO disabled because SU2C links do not pass WCAG AA.
      },
    });
  });

  it("is accessible Bowelbabe", () => {
    cy.viewport(1000, 480); // desktop breakpoint for full size header
    mount(
      <TestThemeWrapper theme={bowelbabeTheme}>
        <Header siteSlogan="Header slogan here">
          <Button>Child component</Button>
        </Header>
        <div id="main" tabIndex={-1}>
          blah
        </div>
      </TestThemeWrapper>,
    );
    cy.injectAxe();
    cy.checkA11y("body");
  });
});
