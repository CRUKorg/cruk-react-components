import React, { FC } from "react";
import { Story, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, su2cTheme } from "..";
import AddressLookup, { AddressLookupProps } from ".";

export default {
  title: "AddressLookup",
  component: AddressLookup,
} as Meta<AddressLookupProps>;

const AddressLookupWithState: FC<AddressLookupProps> = (args) => {
  return (
    <AddressLookup
      {...args}
      apiKey="MG17-ZD93-FF33-KF13"
      onAddressSelected={(address) => alert(JSON.stringify(address, null, 2))}
      onChange={(e) => console.log("value", e.target.value)}
    />
  );
};

const Template: Story<AddressLookupProps> = (args) => (
  <AddressLookupWithState {...args} />
);

export const AddressLookUp: Story<AddressLookupProps> = Template.bind({});
AddressLookUp.storyName = "AddressLookUp";
AddressLookUp.args = {
  disabled: false,
};

const TemplateWithSU2C: Story<AddressLookupProps> = (args) => (
  <ThemeProvider theme={su2cTheme}>
    <GlobalStyle />
    <AddressLookupWithState {...args} />
  </ThemeProvider>
);

export const SU2CAddressLookUp: Story<AddressLookupProps> =
  TemplateWithSU2C.bind({});
SU2CAddressLookUp.storyName = "SU2C AddressLookUp";
