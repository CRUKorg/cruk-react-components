/// <reference types="cypress" />

import React from "react";
import { mount } from "cypress/react";

import { TestThemeWrapper } from "../TestWrapper";
import {
  Box,
  Checkbox,
  Heading,
  LegendWrapper,
  Radio,
  crukTheme,
  su2cTheme,
} from "..";

const content = () => (
  <>
    <section>
      <Heading h3 textSize="l">
        Legend Wrapper
      </Heading>
      <Box marginBottom="m">
        <LegendWrapper legendText="Legend Example" />
      </Box>
    </section>
    <section>
      <Heading h3 textSize="l">
        Required
      </Heading>
      <Box marginBottom="m">
        <LegendWrapper legendText="Legend Example" required />
      </Box>
    </section>
    <section>
      <Heading h3 textSize="l">
        Radio
      </Heading>
      <Box marginBottom="m">
        <LegendWrapper legendText="Legend Example">
          <Radio name="example1" value="one">
            Option one
          </Radio>
        </LegendWrapper>
      </Box>
    </section>

    <section>
      <Heading h3 textSize="l">
        Radio Error
      </Heading>
      <Box marginBottom="m">
        <LegendWrapper
          legendText="Legend Example"
          hasError
          errorMessage="Error Message"
        >
          <Radio name="example1" value="one">
            Option one
          </Radio>
        </LegendWrapper>
      </Box>
    </section>
    <section>
      <Heading h3 textSize="l">
        Checkbox
      </Heading>
      <Box marginBottom="m">
        <LegendWrapper legendText="Legend Example">
          <Checkbox disabled={false} value="value" />
        </LegendWrapper>
      </Box>
    </section>

    <section>
      <Heading h3 textSize="l">
        Checkbox Error
      </Heading>
      <Box marginBottom="m">
        <LegendWrapper
          legendText="Legend Example"
          hasError
          errorMessage="Error Message"
        >
          <Checkbox disabled={false} value="value" />
        </LegendWrapper>
      </Box>
    </section>
  </>
);

describe("LegendWrapper", () => {
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
});
