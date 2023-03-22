import React from "react";
import { Story, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { su2cTheme, Link, GlobalStyle, bowelbabeTheme } from "..";
import Footer, { FooterProps } from ".";

export default {
  title: "Footer (experimental)",
  component: Footer,
} as Meta<FooterProps>;

const Template: Story = (args) => (
  <Footer {...args}>
    <Link
      appearance="secondary"
      href="https://www.cancerresearchuk.org/about-us/contact-us"
    >
      Contact us
    </Link>
    <Link
      appearance="secondary"
      href="https://www.cancerresearchuk.org/privacy-statement"
    >
      Privacy
    </Link>
  </Footer>
);

export const FooterDefault: Story = Template.bind({});
FooterDefault.args = {};

const TemplateWithSU2C: Story = (args) => (
  <ThemeProvider theme={su2cTheme}>
    <GlobalStyle />
    <Footer {...args}>
      <Link
        appearance="secondary"
        href="https://www.cancerresearchuk.org/about-us/contact-us"
      >
        Contact us
      </Link>
      <Link
        appearance="secondary"
        href="https://www.cancerresearchuk.org/privacy-statement"
      >
        Privacy
      </Link>
    </Footer>
  </ThemeProvider>
);

export const SU2CFooter: Story = TemplateWithSU2C.bind({});
SU2CFooter.storyName = "SU2C Footer";
SU2CFooter.args = {};

const TemplateWithBowelbabe: Story = (args) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <GlobalStyle />
    <Footer {...args}>
      <Link
        appearance="secondary"
        href="https://www.cancerresearchuk.org/about-us/contact-us"
      >
        Contact us
      </Link>
      <Link
        appearance="secondary"
        href="https://www.cancerresearchuk.org/privacy-statement"
      >
        Privacy
      </Link>
    </Footer>
  </ThemeProvider>
);

export const BowelbabeFooter: Story = TemplateWithBowelbabe.bind({});
BowelbabeFooter.storyName = "Bowelbabe Footer";
BowelbabeFooter.args = {};
