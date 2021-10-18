import React from "react";
import { Story, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { su2cTheme, Icon, GlobalStyle } from "..";
import Badge, { BadgeProps } from ".";

export default {
  title: "Badge",
  component: Badge,
} as Meta<BadgeProps>;

const Template: Story = (args) => <Badge {...args} />;

export const BadgeWithText: Story = Template.bind({});
BadgeWithText.args = {
  children: "this is text",
  backgroundColor: "primary",
};

export const Default: Story = Template.bind({});
Default.args = {
  children: <Icon name="poundSign" />,
};

export const BadgeWithColour: Story = Template.bind({});
BadgeWithColour.args = {
  backgroundColor: "secondary",
  children: <Icon name="search" />,
};

export const BadgeWithInverseColours: Story = Template.bind({});
BadgeWithInverseColours.args = {
  backgroundColor: "textLight",
  textColor: "tertiary",
  borderColor: "tertiary",
  children: <Icon name="comment" />,
};

const TemplateWithSU2C: Story = (args) => (
  <ThemeProvider theme={su2cTheme}>
    <GlobalStyle />
    <Badge {...args} />
  </ThemeProvider>
);

export const SU2CBadgeWithText: Story = TemplateWithSU2C.bind({});
SU2CBadgeWithText.storyName = "SU2C With Text";
SU2CBadgeWithText.args = {
  children: "this is text",
  backgroundColor: "primary",
  textColor: "textOnPrimary",
};

export const SU2CDefault: Story = TemplateWithSU2C.bind({});
SU2CDefault.storyName = "SU2C Default";
SU2CDefault.args = {
  children: <Icon name="poundSign" />,
};

export const SU2CBadgeWithColour: Story = TemplateWithSU2C.bind({});
SU2CBadgeWithColour.storyName = "SU2C With Colour";
SU2CBadgeWithColour.args = {
  backgroundColor: "secondary",
  children: <Icon name="search" />,
};

export const SU2CBadgeWithInverseColours: Story = TemplateWithSU2C.bind({});
SU2CBadgeWithInverseColours.storyName = "SU2C With Inverse Colours";
SU2CBadgeWithInverseColours.args = {
  backgroundColor: "textLight",
  textColor: "tertiary",
  borderColor: "tertiary",
  children: <Icon name="comment" />,
};
