import React from "react";
import { Story, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { Text, su2cTheme, GlobalStyle } from "..";
import Box, { BoxProps } from ".";

export default {
  title: "Box",
  component: Box,
} as Meta<BoxProps>;

const Template: Story = (args) => <Box {...args} />;

export const Default: Story = Template.bind({});
Default.args = {
  children: <Text textColor="textDark">this is a box</Text>,
};

export const BoxWithColour: Story = Template.bind({});
BoxWithColour.args = {
  backgroundColor: "primary",
  children: <Text textColor="textOnPrimary">this is a box with colours</Text>,
};

export const BoxWithColourWithCustomSpacing: Story = Template.bind({});
BoxWithColourWithCustomSpacing.args = {
  backgroundColor: "primary",
  paddingVertical: "xl",
  paddingBottom: "xs",
  children: (
    <Text textColor="textOnPrimary">this is a box with custom spacing</Text>
  ),
};

const TemplateWithSU2C: Story = (args) => (
  <ThemeProvider theme={su2cTheme}>
    <GlobalStyle />
    <Box {...args} />
  </ThemeProvider>
);

export const SU2CDefault: Story = TemplateWithSU2C.bind({});
SU2CDefault.storyName = "SU2C Default";
SU2CDefault.args = {
  children: <Text textColor="textDark">this is a box</Text>,
};

export const SU2CBoxWithColour: Story = TemplateWithSU2C.bind({});
SU2CBoxWithColour.storyName = "SU2C Box With Colour";
SU2CBoxWithColour.args = {
  backgroundColor: "primary",
  children: <Text textColor="textOnPrimary">this is a box with colours</Text>,
};

export const SU2CBoxWithColourWithCustomSpacing: Story = TemplateWithSU2C.bind(
  {}
);
SU2CBoxWithColourWithCustomSpacing.storyName = "SU2C Box With Custom Spacing";
SU2CBoxWithColourWithCustomSpacing.args = {
  backgroundColor: "primary",
  paddingVertical: "xl",
  paddingBottom: "xs",
  children: (
    <Text textColor="textOnPrimary">this is a box with custom spacing</Text>
  ),
};
