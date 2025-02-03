import React from "react";
import { type StoryObj } from "@storybook/react";

import DateField from ".";
import AllThemesWrapper from "../AllThemesWrapper";

export default {
  title: "DateField",
  component: DateField,
  args: {
    dayName: "birthDay",
    monthName: "birthMonth",
    yearName: "birthYear",
    label: "When were they born?",
    hintText: "for example: 24 11 1988",
    onChange: () => {
      // onChange
    },
    onBlur: () => {
      // onBlur
    },
    onFocus: () => {
      // onFocus
    },
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
  render: (args) => (
    <AllThemesWrapper>
      <DateField {...args} />
    </AllThemesWrapper>
  ),
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
  render: (args) => (
    <AllThemesWrapper>
      <DateField {...args} />
    </AllThemesWrapper>
  ),
};
