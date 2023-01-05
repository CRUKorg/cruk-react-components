/// <reference types="cypress" />

import React from "react";
import { mount } from "cypress/react";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";

import TestWrapper from "../TestWrapper";
import { IconFa } from "..";

const content = () => (
  <>
    <IconFa faIcon={faBullseye} />
    <IconFa faIcon={faBullseye} size="36px" color="primary" />
    <IconFa faIcon={faBullseye} size="48px" color="secondary" />
  </>
);

describe("IconFa", () => {
  it("is accessible", () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.injectAxe();
    cy.checkA11y("body");
  });

  it("should match snapshot", () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.document().its("fonts.status").should("equal", "loaded");
    cy.get("body").first().matchImageSnapshot();
  });
});
