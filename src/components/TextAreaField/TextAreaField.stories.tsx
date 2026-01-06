import React from "react";
import { type StoryObj } from "@storybook/react-vite";

import TextAreaField from ".";
import AllThemesWrapper from "../AllThemesWrapper";
import "./styles.css";
import "../ErrorText/styles.css";
import "../LabelWrapper/styles.css";

export default {
  title: "TextAreaField",
  component: TextAreaField,
  args: {
    defaultValue: "This is text it defaults to a paragraph tag",
    disabled: false,
    required: false,
    label: "TextAreaField",
    hintText: "hint text",
    resize: "vertical",
    lineCount: 5,
    hasError: false,
    errorMessage: undefined,
  },
  argTypes: {
    resize: {
      control: { type: "select" },
      options: ["both", "vertical", "horizontal", "none"],
    },
    lineCount: {
      control: { type: "number", min: 1, max: 20, step: 1 },
    },
    hasError: {
      control: { type: "boolean" },
    },
    errorMessage: {
      control: { type: "text" },
    },
    hintText: {
      control: { type: "text" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    required: {
      control: { type: "boolean" },
    },
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
