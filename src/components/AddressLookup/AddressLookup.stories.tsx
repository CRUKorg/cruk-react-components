import React from "react";
import { StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { su2cTheme, bowelbabeTheme } from "..";
import AddressLookup from ".";

export default {
  title: "AddressLookup",
  component: AddressLookup,
  args: {
    disabled: false,
    errorMessage: "",
    hasError: false,
    label: "Home address",
    required: true,
    isValid: true,
    isValidVisible: false,
    isInvalidVisible: false,
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof AddressLookup>;

export const AddressLookupStory: Story = {
  name: "AddressLookup",
};

export const AddressLookupSU2C: Story = {
  name: "AddressLookup SU2C",
  render: (args) => (
    <ThemeProvider theme={su2cTheme}>
      <AddressLookup {...args} />
    </ThemeProvider>
  ),
};

export const AddressLookupBowelbabe: Story = {
  name: "AddressLookup bowelbabeTheme",
  render: (args) => (
    <ThemeProvider theme={bowelbabeTheme}>
      <AddressLookup {...args} />
    </ThemeProvider>
  ),
};
