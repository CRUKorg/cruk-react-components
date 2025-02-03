import React from "react";
import { type StoryObj } from "@storybook/react";

import ErrorText from ".";
import AllThemesWrapper from "../AllThemesWrapper";

export default {
  title: "ErrorText",
  component: ErrorText,
  args: {
    children: "this is error text",
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof ErrorText>;

export const ErrorTextDefault: Story = {
  name: "ErrorTextDefault",
  args: {},
  render: (args) => (
    <AllThemesWrapper>
      <ErrorText {...args} />
    </AllThemesWrapper>
  ),
};
