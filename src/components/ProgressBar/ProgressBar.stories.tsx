import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { bowelbabeTheme, su2cTheme } from "..";
import ProgressBar, { ProgressBarProps } from ".";

export default {
  title: "ProgressBar (experimental)",
  component: ProgressBar,
  args: {
    percentage: 74,
    secondaryPercentage: 90,
  },
  tags: ["autodocs"],
} as Meta<ProgressBarProps>;

type Story = StoryObj<typeof ProgressBar>;

export const ProgressBarDefault: Story = {
  name: "ProgressBarDefault",
  args: {},
};
export const ProgressBarCircular: Story = {
  name: "ProgressBarDefault",
  args: { isCircular: true },
};

/// SU2C

const su2cRender = (args: ProgressBarProps) => (
  <ThemeProvider theme={su2cTheme}>
    <ProgressBar {...args} />
  </ThemeProvider>
);

export const ProgressBarSU2C: Story = {
  name: "ProgressBarSU2C",
  args: {},
  render: su2cRender,
};
export const ProgressBarCircularSU2C: Story = {
  name: "ProgressBarSU2C",
  args: { isCircular: true },
  render: su2cRender,
};

/// Bowelbabe

const bowelbabeRender = (args: ProgressBarProps) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <ProgressBar {...args} />
  </ThemeProvider>
);

export const ProgressBarBowelbabe: Story = {
  name: "ProgressBarBowelbabe",
  args: {},
  render: bowelbabeRender,
};
export const ProgressBarCircularBowelbabe: Story = {
  name: "ProgressBarCircularBowelbabe",
  args: { isCircular: true },
  render: bowelbabeRender,
};
