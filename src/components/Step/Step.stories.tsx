import React from "react";
import { type StoryObj } from "@storybook/react-vite";

import AllThemesWrapper from "../AllThemesWrapper";
import Step from ".";
import "./styles.css";

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
  render: (args) => (
    <AllThemesWrapper>
      <Step {...args} />
    </AllThemesWrapper>
  ),
};
