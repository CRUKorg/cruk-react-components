import React from "react";
import { StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { su2cTheme, crukTheme, bowelbabeTheme } from "..";
import Link, { LinkProps } from ".";

export default {
  title: "Link",
  component: Link,
  args: {
    appearance: undefined,
    href: "http://www.google.com",
    children: "Default link",
    rel: undefined,
    target: undefined,
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  name: "Default",
  args: {},
};

export const Primary: Story = {
  name: "Primary",
  args: {
    appearance: "primary",
  },
};

export const Secondary: Story = {
  name: "Secondary",
  args: {
    appearance: "secondary",
  },
};

export const WithImage: Story = {
  name: "WithImage",
  args: {
    children: (
      <img
        style={{ width: "80px", height: "30px" }}
        alt=""
        src={`${crukTheme.siteConfig.assetPath}images/logos/cruk-160.png`}
      />
    ),
  },
};

/// SU2C

const su2cRender = (args: LinkProps) => (
  <ThemeProvider theme={su2cTheme}>
    <Link {...args} />
  </ThemeProvider>
);

export const DefaultSU2C: Story = {
  name: "Default SU2C",
  args: {},
  render: su2cRender,
};

export const PrimarySU2C: Story = {
  name: "Primary SU2C",
  args: {
    appearance: "primary",
  },
  render: su2cRender,
};

export const SecondarySU2C: Story = {
  name: "Secondary SU2C",
  args: {
    appearance: "secondary",
  },
  render: su2cRender,
};

/// Bowelbabe

const bowelbabeRender = (args: LinkProps) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <Link {...args} />
  </ThemeProvider>
);

export const DefaultBowelbabe: Story = {
  name: "Default Bowelbabe",
  args: {},
  render: bowelbabeRender,
};

export const PrimaryBowelbabe: Story = {
  name: "Primary Bowelbabe",
  args: {
    appearance: "primary",
  },
  render: bowelbabeRender,
};

export const SecondaryBowelbabe: Story = {
  name: "Secondary Bowelbabe",
  args: {
    appearance: "secondary",
  },
  render: bowelbabeRender,
};
