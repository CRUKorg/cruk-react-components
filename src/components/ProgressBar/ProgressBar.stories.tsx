import React from "react";
import { type StoryObj } from "@storybook/react-vite";

import ProgressBar from ".";
import AllThemesWrapper from "../AllThemesWrapper";

export default {
  title: "ProgressBar (experimental)",
  component: ProgressBar,
  args: {
    percentage: 74,
    secondaryPercentage: 90,
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof ProgressBar>;

export const ProgressBarDefault: Story = {
  name: "ProgressBarDefault",
  args: {},
  render: (args) => (
    <AllThemesWrapper>
      <ProgressBar {...args} />
    </AllThemesWrapper>
  ),
};
export const ProgressBarCircular: Story = {
  name: "ProgressBarCircular",
  args: { isCircular: true },
  render: (args) => (
    <AllThemesWrapper>
      <ProgressBar {...args} />
    </AllThemesWrapper>
  ),
};
