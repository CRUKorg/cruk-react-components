import React from "react";
import { StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { su2cTheme, Link, bowelbabeTheme } from "..";
import Footer, { FooterProps } from ".";

const FooterWithChildren = (args: FooterProps) => (
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

export default {
  title: "Footer (experimental)",
  component: Footer,
  render: FooterWithChildren,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Footer>;

export const FooterDefault: Story = {
  name: "FooterDefault",
  args: {},
};

/// SU2C

const su2cRender = (args: FooterProps) => (
  <ThemeProvider theme={su2cTheme}>
    <FooterWithChildren {...args} />
  </ThemeProvider>
);

export const FooterSU2C: Story = {
  name: "FooterSU2C",
  args: {},
  render: su2cRender,
};

/// Bowelbabe

const bowelbabeRender = (args: FooterProps) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <FooterWithChildren {...args} />
  </ThemeProvider>
);

export const FooterBowelbabe: Story = {
  name: "FooterBowelbabe",
  args: {},
  render: bowelbabeRender,
};
