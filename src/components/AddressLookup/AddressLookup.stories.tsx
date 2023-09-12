import React from "react";
import { StoryObj } from "@storybook/react";

import AddressLookup from ".";
import { AllThemesWrapper } from "../AllThemesWrapper";

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
    apiKey: "MG17-ZD93-FF33-KF13",
    onAddressSelected: (address: unknown) => console.table(address),
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof AddressLookup>;

export const AddressLookupStory: Story = {
  name: "AddressLookup",
  render: (args) => (
    <AllThemesWrapper>
      <AddressLookup {...args} />
    </AllThemesWrapper>
  ),
};
