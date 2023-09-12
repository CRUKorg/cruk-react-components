import React from "react";
import { StoryObj } from "@storybook/react";

import RadioConsent, { RadioConsentProps } from ".";
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
  return (
    <fieldset style={{ border: "none" }}>
      <RadioConsent
        {...args}
        onChange={(e) => setSelectedEmail(e.target.value)}
        selectedValue={selectedEmail}
      />
    </fieldset>
  );
};

export const RadioConsentDefault: Story = {
  name: "RadioConsentDefault",
  args: {},
  render: (args) => (
    <AllThemesWrapper>
      <RadioConsentWithState {...args} />
    </AllThemesWrapper>
  ),
};
