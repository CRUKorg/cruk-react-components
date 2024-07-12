/// <reference types="cypress" />

import React from "react";
import { mount } from "cypress/react";
import {
  faEye,
  faPenToSquare,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

import { TestThemeWrapper } from "../AllThemesWrapper";
import {
  su2cTheme,
  crukTheme,
  IconFa,
  Button,
  Box,
  bowelbabeTheme,
  rflTheme,
} from "..";

const content = () => (
  <Box backgroundColor="backgroundLight" padding="none">
    <Button appearance="primary">Primary</Button>
    <Button appearance="secondary">Secondary</Button>
    <Button appearance="tertiary">Tertiary</Button>
    <Button disabled appearance="primary">
      Disabled primary
    </Button>
    <Button disabled appearance="secondary">
      Disabled secondary
    </Button>
    <Button disabled appearance="tertiary">
      Disabled secondary
    </Button>
    <Button size="l">Large button</Button>
    <Button>
      <IconFa faIcon={faEye} />
      Icon with text
    </Button>
    <Button>
      Icon right
      <IconFa faIcon={faPenToSquare} />
    </Button>
    <Button>
      <IconFa faIcon={faEye} />
      Icon either side
      <IconFa faIcon={faEye} />
    </Button>
    <Button href="https://www.styled-components.com/">Link as Button</Button>
    <Button aria-label="Upload a photo">
      <IconFa faIcon={faCamera} />
    </Button>
    <Button css="background-color: #4267b2;border-color: #4267b2; color: white !important; :hover {background-color: #365899; border-color:  #365899; color: white !important;}">
      <IconFa faIcon={faFacebookSquare} size="18px" />
      Continue with facebook
    </Button>
    <Button full>Full width Button</Button>
  </Box>
);

describe("Button", () => {
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
