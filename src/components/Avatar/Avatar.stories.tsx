import React from "react";
import { StoryObj } from "@storybook/react";

import { crukTheme } from "..";
import { Avatar } from ".";
import { AllThemesWrapper } from "../AllThemesWrapper";

export default {
  title: "Avatar",
  component: Avatar,
  args: {
    name: "Sam",
    size: "s",
    alt: "sam's profile",
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  name: "Default",
  render: (args) => (
    <AllThemesWrapper>
      <Avatar {...args} />
    </AllThemesWrapper>
  ),
};

export const Small: Story = {
  name: "Small",
  args: {
    size: "s",
  },
  render: (args) => (
    <AllThemesWrapper>
      <Avatar {...args} />
    </AllThemesWrapper>
  ),
};

export const Medium: Story = {
  name: "Medium",
  args: {
    size: "m",
  },
  render: (args) => (
    <AllThemesWrapper>
      <Avatar {...args} />
    </AllThemesWrapper>
  ),
};

export const Large: Story = {
  name: "Large",
  args: {
    size: "l",
  },
  render: (args) => (
    <AllThemesWrapper>
      <Avatar {...args} />
    </AllThemesWrapper>
  ),
};

export const ExtraLarge: Story = {
  name: "ExtraLarge",
  args: {
    size: "xl",
  },
  render: (args) => (
    <AllThemesWrapper>
      <Avatar {...args} />
    </AllThemesWrapper>
  ),
};

export const CustomImage: Story = {
  name: "CustomImage",
  args: {
    size: "xl",
    url: `${crukTheme.siteConfig.assetPath}images/logos/cruk-160.png`,
  },
  render: (args) => (
    <AllThemesWrapper>
      <Avatar {...args} />
    </AllThemesWrapper>
  ),
};
