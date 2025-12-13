import React from "react";
import { type StoryObj } from "@storybook/react-vite";

import RadioConsent, { type RadioConsentProps } from ".";
import AllThemesWrapper from "../AllThemesWrapper";

export default {
  title: "RadioConsent (experimental)",
  component: RadioConsent,
  args: {
    legend: "Email",
    name: "email",
    attributes: [
      { option: "Yes", value: "yes" },
      { option: "No", value: "no" },
    ],
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof RadioConsent>;

const RadioConsentWithState = (args: RadioConsentProps) => {
  const [selectedEmail, setSelectedEmail] = React.useState("yes");

  const id = React.useId();

  return (
    <RadioConsent
      {...args}
      name={`${id}-email`}
      onChange={(e) => setSelectedEmail(e.target.value)}
      selectedValue={selectedEmail}
    />
  );
};

export const RadioConsentDefault: Story = {
  name: "RadioConsentDefault",
  args: {},
  render: (args) => {
    return (
      <AllThemesWrapper>
        <RadioConsentWithState {...args} />
      </AllThemesWrapper>
    );
  },
};
