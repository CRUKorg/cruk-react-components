/// <reference types="cypress" />

import React from "react";
import { mount } from "cypress/react";

import { TestThemeWrapper } from "../AllThemesWrapper";
import { Select, Box, Button, su2cTheme, crukTheme, bowelbabeTheme } from "..";

const content = () => (
  <>
    <Box>
      <Select value="" label="Disabled option" onChange={(event) => {}}>
        <option disabled value="">
          --Please choose an option--
        </option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
      </Select>
    </Box>
    <Box>
      <Select
        value=""
        label="Disabled control"
        onChange={(event) => {}}
        disabled
      >
        <option disabled value="">
          --Please choose an option--
        </option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
      </Select>
    </Box>
    <Box>
      <Select required hasError label="Has error" onChange={(event) => {}}>
        <option value="dog">Dog</option>
        <option value="red_panda">Red panda</option>
        <option value="axolotl">Axolotl</option>
      </Select>
    </Box>
    <Box>
      <Select
        required
        errorMessage="This felid is required ☹️"
        label="Error message"
        onChange={(event) => {}}
      >
        <option value="cat">Cat</option>
      </Select>
    </Box>
  </>
);

const selectSection = () => (
  <Select label="Test Select Option">
    <option disabled value="dog">
      Please select one of the below
    </option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
  </Select>
);

describe("Select", () => {
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

  it("is accessible Bowelbabe theme", () => {
    mount(
      <TestThemeWrapper theme={bowelbabeTheme}>{content()}</TestThemeWrapper>
    );
    cy.injectAxe();
    cy.checkA11y("body");
  });
});

describe("Arrow Keys", () => {
  it("can change selection with keyboard controls", () => {
    mount(
      <TestThemeWrapper theme={crukTheme}>{selectSection()}</TestThemeWrapper>
    );
    cy.getInputByLabel("Test Select Option")
      .trigger("keydown", { key: "Space Bar" })
      .type("{downarrow}")
      .select("Cat")
      .should("have.value", "cat");
  });
});

describe("Tab", () => {
  it("main element is tabable", () => {
    mount(
      <TestThemeWrapper theme={crukTheme}>
        <>
          <Box>
            <Button>Click me</Button>
          </Box>
          <Box>
            <Select label="Test Select Option">
              <option disabled value="">
                Please select one of the below
              </option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </Select>
          </Box>
        </>
      </TestThemeWrapper>
    );
    cy.contains("Click me").focus().tab();
    cy.focused().contains("select").should("exist");
  });
});
