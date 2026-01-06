import React from "react";

import { testAccessibilityOnAllThemes } from "playwright/utils";

import { Heading, Box, Radio, Checkbox } from "..";
import { LegendWrapper } from ".";
import "./styles.css";

function component() {
  return (
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
}

testAccessibilityOnAllThemes({ componentName: "LegendWrapper", component });
