import React from "react";
import { type StoryObj } from "@storybook/react-vite";

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
  render: (args) => (
    <AllThemesWrapper>
      <Avatar {...args} />
    </AllThemesWrapper>
  ),
};

export const Small: Story = {
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
