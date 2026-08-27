import React from "react";

import { Heading, Box, Radio, Checkbox } from "..";
import { LegendWrapper } from ".";
import "./styles.css";
import "../ErrorText/styles.css";

export default {};
export const Component = () => (
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

export const CrukTheme = () => (
  <main data-theme="cruk">
    <Component />
  </main>
);

export const RflTheme = () => (
  <main data-theme="rfl">
    <Component />
  </main>
);

export const Su2cTheme = () => (
  <main data-theme="su2c">
    <Component />
  </main>
);

export const BowelbabeTheme = () => (
  <main data-theme="bowelbabe">
    <Component />
  </main>
);
