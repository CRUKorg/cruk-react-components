import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { bowelbabeTheme, su2cTheme } from "..";
import RadioConsent, { RadioConsentProps } from ".";

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
} as Meta<RadioConsentProps>;

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
  render: RadioConsentWithState,
};

/// SU2C

const su2cRender = (args: RadioConsentProps) => (
  <ThemeProvider theme={su2cTheme}>
    <RadioConsentWithState {...args} />
  </ThemeProvider>
);

export const RadioConsentSU2C: Story = {
  name: "RadioConsentSU2C",
  args: {},
  render: su2cRender,
};

/// Bowelbabe

const bowelbabeRender = (args: RadioConsentProps) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <RadioConsentWithState {...args} />
  </ThemeProvider>
);

export const RadioConsentBowelbabe: Story = {
  name: "RadioConsentBowelbabe",
  args: {},
  render: bowelbabeRender,
};
