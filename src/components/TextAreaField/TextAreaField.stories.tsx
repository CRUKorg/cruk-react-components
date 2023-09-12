import React from "react";
import { StoryObj } from "@storybook/react";

import TextAreaField from ".";
import AllThemesWrapper from "../AllThemesWrapper";

export default {
  title: "TextAreaField",
  component: TextAreaField,
  args: {
    children: "This is text it defaults to a paragraph tag",
    textColor: "textDark",
    value: undefined,
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
