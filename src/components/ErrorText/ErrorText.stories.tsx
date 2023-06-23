import React from "react";
import { StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { bowelbabeTheme, su2cTheme } from "..";
import ErrorText, { ErrorTextProps } from ".";

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
};

/// SU2C

const su2cRender = (args: ErrorTextProps) => (
  <ThemeProvider theme={su2cTheme}>
    <ErrorText {...args} />
  </ThemeProvider>
);

export const ErrorTextSU2C: Story = {
  name: "ErrorTextSU2C",
  args: {},
  render: su2cRender,
};

/// Bowelbabe

const bowelbabeRender = (args: ErrorTextProps) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <ErrorText {...args} />
  </ThemeProvider>
);

export const ErrorTextBowelbabe: Story = {
  name: "ErrorTextBowelbabe",
  args: {},
  render: bowelbabeRender,
};
