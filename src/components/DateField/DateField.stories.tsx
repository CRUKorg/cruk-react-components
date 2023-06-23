import React from "react";
import { StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { bowelbabeTheme, su2cTheme } from "..";
import DateField, { DateFieldProps } from ".";

export default {
  title: "DateField",
  component: DateField,
  args: {
    dayName: "birthDay",
    monthName: "birthMonth",
    yearName: "birthYear",
    label: "When were they born?",
    hintText: "for example: 24 11 1988",
    onChange: () => {},
    onBlur: () => {},
    onFocus: () => {},
    disabled: false,
    required: true,
    dayHasError: false,
    monthHasError: false,
    yearHasError: false,
    errorMessage: "",
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof DateField>;

export const Default: Story = {
  name: "Default",
};

export const DateFieldWithError: Story = {
  name: "DateFieldWithError",
  args: {
    label: "Date with all fields with errors",
    dayHasError: true,
    monthHasError: true,
    yearHasError: true,
    errorMessage: "Day month and year invalid",
  },
};

/// SU2C

const su2cRender = (args: DateFieldProps) => (
  <ThemeProvider theme={su2cTheme}>
    <DateField {...args} />
  </ThemeProvider>
);

export const DateFieldSU2C: Story = {
  name: "DateFieldSU2C",
  args: {},
  render: su2cRender,
};

/// Bowelbabe

const bowelbabeRender = (args: DateFieldProps) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <DateField {...args} />
  </ThemeProvider>
);

export const DateFieldBowelbabe: Story = {
  name: "DateFieldBowelbabe",
  args: {},
  render: bowelbabeRender,
};
