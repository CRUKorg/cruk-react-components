import React from "react";
import { Story, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, su2cTheme, crukTheme, bowelbabeTheme } from "..";
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

const TemplateWithBowelbabe: Story = (args) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <GlobalStyle />
    <Avatar {...args} />
  </ThemeProvider>
);

export const BowelbabeDefault: Story = TemplateWithBowelbabe.bind({});
BowelbabeDefault.storyName = "Bowelbabe Default";
BowelbabeDefault.args = {};

export const BowelbabeSmall: Story = TemplateWithBowelbabe.bind({});
BowelbabeSmall.storyName = "Bowelbabe Small";
BowelbabeSmall.args = {
  name: "Sam",
  size: "s",
  alt: "sam's profile",
};

export const BowelbabeMedium: Story = TemplateWithBowelbabe.bind({});
BowelbabeMedium.storyName = "Bowelbabe Medium";
BowelbabeMedium.args = {
  name: "Sam",
  size: "m",
  alt: "sam's profile",
};

export const BowelbabeLarge: Story = TemplateWithBowelbabe.bind({});
BowelbabeLarge.storyName = "Bowelbabe large";
BowelbabeLarge.args = {
  name: "Sam",
  size: "l",
  alt: "sam's profile",
};

export const BowelbabeExtraLarge: Story = TemplateWithBowelbabe.bind({});
BowelbabeExtraLarge.storyName = "Bowelbabe Extra Large";
BowelbabeExtraLarge.args = {
  name: "Sam",
  size: "xl",
  alt: "sam's profile",
};
