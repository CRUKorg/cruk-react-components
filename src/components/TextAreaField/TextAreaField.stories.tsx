import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { bowelbabeTheme, su2cTheme } from "..";
import TextAreaField, { TextAreaFieldProps } from ".";

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
} as Meta<TextAreaFieldProps>;

type Story = StoryObj<typeof TextAreaField>;

export const TextAreaFieldDefault: Story = {
  name: "TextAreaField Default",
  args: {},
};

export const TextAreaFieldWithError: Story = {
  name: "TextAreaField With Error",
  args: {
    hasError: true,
    errorMessage: "error message",
  },
};

/// SU2C

const su2cRender = (args: TextAreaFieldProps) => (
  <ThemeProvider theme={su2cTheme}>
    <TextAreaField {...args} />
  </ThemeProvider>
);

export const TextAreaFieldSU2C: Story = {
  name: "TextAreaField SU2C",
  args: {},
  render: su2cRender,
};

export const TextAreaFieldWithErrorSU2C: Story = {
  name: "TextAreaField With Error SU2C",
  args: {
    hasError: true,
    errorMessage: "error message",
  },
  render: su2cRender,
};

/// Bowelbabe

const bowelbabeRender = (args: TextAreaFieldProps) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <TextAreaField {...args} />
  </ThemeProvider>
);

export const TextAreaFielBowelbabe: Story = {
  name: "TextAreaField Bowelbabe",
  args: {},
  render: bowelbabeRender,
};

export const TextAreaFieldWithErrorBowelbabe: Story = {
  name: "TextAreaField With Error Bowelbabe",
  args: {
    hasError: true,
    errorMessage: "error message",
  },
  render: bowelbabeRender,
};
