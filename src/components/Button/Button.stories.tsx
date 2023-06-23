import React from "react";
import { StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import IconFa from "../IconFa";

import { Button, ButtonProps } from "./";

import { bowelbabeTheme, su2cTheme } from "..";

export default {
  title: "Button",
  component: Button,
  args: {
    appearance: "primary",
    disabled: false,
    children: "A button",
    full: false,
    size: "m",
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Button>;

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

export const PrimaryAnchorButton: Story = {
  name: "PrimaryAnchorButton",
  args: {
    appearance: "primary",
    href: "https://www.cancerresearchuk.org/",
  },
};

export const Secondary: Story = {
  name: "Secondary",
  args: {
    appearance: "secondary",
  },
};

export const Tertiary: Story = {
  name: "Tertiary",
  args: {
    appearance: "tertiary",
  },
};

export const WithIcons: Story = {
  name: "WithIcons",
  args: {
    children: (
      <>
        <IconFa faIcon={faClock} />A Button
        <IconFa faIcon={faClock} />
      </>
    ),
  },
};

/// SU2C

const su2cRender = (args: ButtonProps) => (
  <ThemeProvider theme={su2cTheme}>
    <Button {...args} />
  </ThemeProvider>
);

export const PrimarySU2C: Story = {
  name: "PrimarySU2C",
  args: {
    appearance: "primary",
  },
  render: su2cRender,
};

export const SecondarySU2C: Story = {
  name: "SecondarySU2C",
  args: {
    appearance: "secondary",
  },
  render: su2cRender,
};

export const TertiarySU2C: Story = {
  name: "TertiarySU2C",
  args: {
    appearance: "tertiary",
  },
  render: su2cRender,
};

/// Bowelbabe

const bowelbabeRender = (args: ButtonProps) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <Button {...args} />
  </ThemeProvider>
);

export const PrimaryBowelbabe: Story = {
  name: "PrimarBowelbabe",
  args: {
    appearance: "primary",
  },
  render: bowelbabeRender,
};

export const SecondaryBowelbabe: Story = {
  name: "SecondaryBowelbabe",
  args: {
    appearance: "secondary",
  },
  render: bowelbabeRender,
};

export const TertiaryBowelbabe: Story = {
  name: "TertiaryBowelbabe",
  args: {
    appearance: "tertiary",
  },
  render: bowelbabeRender,
};
