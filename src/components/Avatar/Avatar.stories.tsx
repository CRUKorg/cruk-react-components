import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { su2cTheme, crukTheme, bowelbabeTheme } from "..";
import Avatar, { AvatarProps } from ".";

export default {
  title: "Avatar",
  component: Avatar,
  args: {
    name: "Sam",
    size: "s",
    alt: "sam's profile",
  },
  tags: ["autodocs"],
} as Meta<AvatarProps>;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  name: "Default",
};

export const Small: Story = {
  name: "Small",
  args: {
    size: "s",
  },
};

export const Medium: Story = {
  name: "Medium",
  args: {
    size: "m",
  },
};

export const Large: Story = {
  name: "Large",
  args: {
    size: "l",
  },
};

export const ExtraLarge: Story = {
  name: "ExtraLarge",
  args: {
    size: "xl",
  },
};

export const CustomImage: Story = {
  name: "CustomImage",
  args: {
    size: "xl",
    url: `${crukTheme.siteConfig.assetPath}images/logos/cruk-160.png`,
  },
};

export const DefaultSU2C: Story = {
  name: "DefaultSU2C",
  render: (args) => (
    <ThemeProvider theme={su2cTheme}>
      <Avatar {...args} />
    </ThemeProvider>
  ),
};

export const SmallSU2C: Story = {
  name: "SmallSU2C",
  args: {
    size: "s",
  },
  render: (args) => (
    <ThemeProvider theme={su2cTheme}>
      <Avatar {...args} />
    </ThemeProvider>
  ),
};

export const MediumSU2C: Story = {
  name: "MediumSU2C",
  args: {
    size: "m",
  },
  render: (args) => (
    <ThemeProvider theme={su2cTheme}>
      <Avatar {...args} />
    </ThemeProvider>
  ),
};

export const LargeSU2C: Story = {
  name: "LargeSU2C",
  args: {
    size: "l",
  },
  render: (args) => (
    <ThemeProvider theme={su2cTheme}>
      <Avatar {...args} />
    </ThemeProvider>
  ),
};

export const ExtraLargeSU2C: Story = {
  name: "ExtraLargeSU2C",
  args: {
    size: "xl",
  },
  render: (args) => (
    <ThemeProvider theme={su2cTheme}>
      <Avatar {...args} />
    </ThemeProvider>
  ),
};

export const CustomImageSU2C: Story = {
  name: "CustomImageSU2C",
  args: {
    size: "xl",
    url: `${crukTheme.siteConfig.assetPath}images/logos/cruk-160.png`,
  },
  render: (args) => (
    <ThemeProvider theme={su2cTheme}>
      <Avatar {...args} />
    </ThemeProvider>
  ),
};

/////////

export const DefaultBowelBabe: Story = {
  name: "DefaultBowelBabe",
  render: (args) => (
    <ThemeProvider theme={bowelbabeTheme}>
      <Avatar {...args} />
    </ThemeProvider>
  ),
};

export const SmallBowelBabe: Story = {
  name: "SmallBowelBabe",
  args: {
    size: "s",
  },
  render: (args) => (
    <ThemeProvider theme={bowelbabeTheme}>
      <Avatar {...args} />
    </ThemeProvider>
  ),
};

export const MediumBowelBabe: Story = {
  name: "MediumBowelBabe",
  args: {
    size: "m",
  },
  render: (args) => (
    <ThemeProvider theme={bowelbabeTheme}>
      <Avatar {...args} />
    </ThemeProvider>
  ),
};

export const LargeBowelBabe: Story = {
  name: "LargeBowelBabe",
  args: {
    size: "l",
  },
  render: (args) => (
    <ThemeProvider theme={bowelbabeTheme}>
      <Avatar {...args} />
    </ThemeProvider>
  ),
};

export const ExtraLargeBowelBabe: Story = {
  name: "ExtraLargeBowelBabe",
  args: {
    size: "xl",
  },
  render: (args) => (
    <ThemeProvider theme={bowelbabeTheme}>
      <Avatar {...args} />
    </ThemeProvider>
  ),
};

export const CustomImageBowelBabe: Story = {
  name: "CustomImageBowelBabe",
  args: {
    size: "xl",
    url: `${crukTheme.siteConfig.assetPath}images/logos/cruk-160.png`,
  },
  render: (args) => (
    <ThemeProvider theme={bowelbabeTheme}>
      <Avatar {...args} />
    </ThemeProvider>
  ),
};
