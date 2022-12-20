import React from "react";
import { Story, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, su2cTheme, crukTheme } from "..";
import Avatar, { AvatarProps } from ".";

export default {
  title: "Avatar",
  component: Avatar,
} as Meta<AvatarProps>;

const Template: Story = (args) => <Avatar {...args} />;

export const Default: Story = Template.bind({});
Default.args = {};

export const Small: Story = Template.bind({});
Small.args = {
  name: "Sam",
  size: "s",
  alt: "sam's profile",
};

export const Medium: Story = Template.bind({});
Medium.args = {
  name: "Sam",
  size: "m",
  alt: "sam's profile",
};

export const Large: Story = Template.bind({});
Large.args = {
  name: "Sam",
  size: "l",
  alt: "sam's profile",
};

export const ExtraLarge: Story = Template.bind({});
Large.args = {
  name: "Sam",
  size: "xl",
  alt: "sam's profile",
};

export const CustomImage: Story = Template.bind({});
CustomImage.args = {
  name: "Sam",
  size: "xl",
  alt: "sam's profile",
  url: `${crukTheme.siteConfig.assetPath}images/logos/cruk-160.png`,
};

const TemplateWithSU2C: Story = (args) => (
  <ThemeProvider theme={su2cTheme}>
    <GlobalStyle />
    <Avatar {...args} />
  </ThemeProvider>
);

export const SU2CDefault: Story = TemplateWithSU2C.bind({});
SU2CDefault.storyName = "SU2C Default";
SU2CDefault.args = {};

export const SU2CSmall: Story = TemplateWithSU2C.bind({});
SU2CSmall.storyName = "SU2C Small";
SU2CSmall.args = {
  name: "Sam",
  size: "s",
  alt: "sam's profile",
};

export const SU2CMedium: Story = TemplateWithSU2C.bind({});
SU2CMedium.storyName = "SU2C Medium";
SU2CMedium.args = {
  name: "Sam",
  size: "m",
  alt: "sam's profile",
};

export const SU2CLarge: Story = TemplateWithSU2C.bind({});
SU2CLarge.storyName = "SU2C large";
SU2CLarge.args = {
  name: "Sam",
  size: "l",
  alt: "sam's profile",
};

export const SU2CExtraLarge: Story = TemplateWithSU2C.bind({});
SU2CExtraLarge.storyName = "SU2C Extra Large";
SU2CExtraLarge.args = {
  name: "Sam",
  size: "xl",
  alt: "sam's profile",
};
