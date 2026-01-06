import React from "react";
import { type StoryObj } from "@storybook/react-vite";

import AddressLookup from ".";
import { AllThemesWrapper } from "../AllThemesWrapper";
import "./styles.css";

export default {
  title: "AddressLookup",
  component: AddressLookup,
  args: {
    disabled: false,
    errorMessage: "",
    hasError: false,
    label: "Home address",
    hintText: "Start typing your address or postcode",
    required: true,
    isValid: true,
    isValidVisible: false,
    isInvalidVisible: false,
    apiKey: "MG17-ZD93-FF33-KF13",
    onAddressSelected: (address: unknown) => console.table(address),
  },
  tags: ["autodocs"],
};

type Story = StoryObj;

export const AddressLookupStory: Story = {
  name: "AddressLookup",
  render: (args) => (
    <AllThemesWrapper>
      <AddressLookup
        {...(args as React.ComponentProps<typeof AddressLookup>)}
      />
    </AllThemesWrapper>
  ),
};
