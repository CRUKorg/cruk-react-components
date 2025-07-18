import React from "react";
import { type StoryObj } from "@storybook/react-vite";

import TextAreaField from ".";
import AllThemesWrapper from "../AllThemesWrapper";

export default {
  title: "TextAreaField",
  component: TextAreaField,
  args: {
    defaultValue: "This is text it defaults to a paragraph tag",
    disabled: false,
    required: false,
    label: "TextAreaField",
    hintText: undefined,
    resize: "horizontal",
    lineCount: 5,
    hasError: false,
    errorMessage: undefined,
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof TextAreaField>;

export const TextAreaFieldDefault: Story = {
  name: "TextAreaField Default",
  args: {},
  render: (args) => (
    <AllThemesWrapper>
      <TextAreaField {...args} />
    </AllThemesWrapper>
  ),
};

export const TextAreaFieldWithError: Story = {
  name: "TextAreaField With Error",
  args: {
    hasError: true,
    errorMessage: "error message",
  },
  render: (args) => (
    <AllThemesWrapper>
      <TextAreaField {...args} />
    </AllThemesWrapper>
  ),
};
