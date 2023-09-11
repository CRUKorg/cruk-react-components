/// <reference types="cypress" />

import React from "react";
import { mount } from "cypress/react";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";

import AllThemesWrapper from "../AllThemesWrapper";
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
    mount(<AllThemesWrapper>{content()}</AllThemesWrapper>);
    cy.injectAxe();
    cy.checkA11y("body");
  });
});
