import React from "react";
import { StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { bowelbabeTheme, su2cTheme } from "..";
import Step, { StepProps } from ".";

export default {
  title: "Step (experimental)",
  component: Step,
  args: {
    current: 3,
    steps: ["Account", "Details", "Activity", "Motivation", "Page"],
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Step>;

export const StepDefault: Story = {
  name: "StepDefault",
  args: {},
};

/// SU2C

const su2cRender = (args: StepProps) => (
  <ThemeProvider theme={su2cTheme}>
    <Step {...args} />
  </ThemeProvider>
);

export const StepSU2C: Story = {
  name: "StepSU2C",
  args: {},
  render: su2cRender,
};

/// Bowelbabe

const bowelbabeRender = (args: StepProps) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <Step {...args} />
  </ThemeProvider>
);

export const StepBowelbabe: Story = {
  name: "StepBowelbabe",
  args: {},
  render: bowelbabeRender,
};
