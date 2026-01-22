import React from "react";
import { type StoryObj } from "@storybook/react-vite";

import AllThemesWrapper from "../AllThemesWrapper";
import ProgressBar from ".";
import "./styles.css";

export default {
  title: "ProgressBar (experimental)",
  component: ProgressBar,
  args: {
    percentage: 74,
    secondaryPercentage: 90,
  },
  argTypes: {
    percentage: {
      control: "number",
    },
    secondaryPercentage: {
      control: "number",
    },
    isCircular: {
      control: "boolean",
    },
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
