import React from "react";
import { StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Button from "../Button";
import IconFa from "../IconFa";

import { bowelbabeTheme, su2cTheme } from "..";
import TextField, { TextFieldProps } from ".";

export default {
  title: "TextField",
  component: TextField,
  args: {
    value: undefined,
    disabled: false,
    required: false,
    label: "TextField",
    hintText: "hint text here",
    hasError: false,
    errorMessage: undefined,
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof TextField>;

export const TextFieldDefault: Story = {
  name: "TextField Default",
  args: {},
};

export const TextFieldExtraLeft: Story = {
  name: "TextField Extra Left",
  args: {
    extraLeft: "£",
  },
};
export const TextFieldExtraRight: Story = {
  name: "TextField Extra Right",
  args: {
    extraRight: (
      <Button appearance="tertiary">
        <IconFa faIcon={faSearch} />
      </Button>
    ),
  },
};

export const TextFieldWithError: Story = {
  name: "TextField With Error",
  args: {
    hasError: true,
    errorMessage: "error message",
  },
};

/// SU2C

const su2cRender = (args: TextFieldProps) => (
  <ThemeProvider theme={su2cTheme}>
    <TextField {...args} />
  </ThemeProvider>
);

export const TextFieldSU2C: Story = {
  name: "TextField SU2C",
  args: {},
  render: su2cRender,
};

export const TextFieldWithErrorSU2C: Story = {
  name: "TextField With Error SU2C",
  args: {
    hasError: true,
    errorMessage: "error message",
  },
  render: su2cRender,
};

/// Bowelbabe

const bowelbabeRender = (args: TextFieldProps) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <TextField {...args} />
  </ThemeProvider>
);

export const TextFieldBowelbabe: Story = {
  name: "TextField Bowelbabe",
  args: {},
  render: bowelbabeRender,
};

export const TextFieldWithErrorBowelbabe: Story = {
  name: "TextField With Error Bowelbabe",
  args: {
    hasError: true,
    errorMessage: "error message",
  },
  render: bowelbabeRender,
};
