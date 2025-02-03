/// <reference types="cypress" />

import React from "react";
import { mount } from "cypress/react";

import { TestThemeWrapper } from "../AllThemesWrapper";
import { Link, crukTheme, rflTheme, su2cTheme } from "..";

const content = () => (
  <>
    <div>
      <Link href="http://www.google.com">Default link</Link>
    </div>
    <div>
      <Link href="http://www.google.com" appearance="primary">
        Primary link
      </Link>
    </div>
    <div>
      <Link href="http://www.google.com" appearance="secondary">
        secondary link
      </Link>
    </div>
    <div>
      <Link href="http://www.google.com" target="_blank">
        Link opens new page
      </Link>
    </div>
    <div>
      <Link href="http://www.google.com" rel="noopener noreferrer nofollow">
        External link that that want web crawlers wont follow
      </Link>
    </div>
    <div>
      <Link
        href="http://www.google.com"
        textColor="secondary"
        textHoverColor="#004400"
      >
        Link using different colours
      </Link>
    </div>
    <div>
      <Link href="http://www.google.com" textSize="xl">
        Link with extra large text
      </Link>
    </div>
    <div>
      <Link href="http://www.google.com" aria-label="google homepage">
        <img
          style={{ width: "80px", height: "30px" }}
          alt=""
          src={`${crukTheme.siteConfig.assetPath}images/logos/cruk-160.png`}
        />
      </Link>
    </div>
    <div>
      <Link
        href="#"
        onClick={() => {
          alert("from link");
        }}
      >
        With click handler
      </Link>
    </div>
  </>
);

describe("Link", () => {
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
    mount(<TestThemeWrapper theme={crukTheme}>{content()}</TestThemeWrapper>);
    cy.injectAxe();
    cy.checkA11y("body");
  });
});
