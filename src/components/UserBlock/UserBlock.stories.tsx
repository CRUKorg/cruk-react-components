import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import { su2cTheme, Text, IconFa, bowelbabeTheme } from "..";
import UserBlock, { UserBlockProps } from ".";

export default {
  title: "UserBlock (experimental)",
  component: UserBlock,
  args: {
    name: "Sam Smith",
    size: "s",
  },
  tags: ["autodocs"],
} as Meta<UserBlockProps>;

type Story = StoryObj<typeof UserBlock>;

export const UserBlockDefault: Story = {
  name: "UserBlock",
  args: {},
};
export const UserBlockCustomAvatar: Story = {
  name: "UserBlock Custom Avatar",
  args: {
    avatarUrl: "https://via.placeholder.com/300/2e008b/d9318a?text=avatar",
  },
};
export const UserBlockWithExtra: Story = {
  name: "UserBlock Custom Avatar",
  args: {
    extra: (
      <Text>
        <IconFa faIcon={faClock} /> Just now
      </Text>
    ),
  },
};

/// SU2C

const su2cRender = (args: UserBlockProps) => (
  <ThemeProvider theme={su2cTheme}>
    <UserBlock {...args} />
  </ThemeProvider>
);

export const UserBlockDefaultSU2C: Story = {
  name: "UserBlock SU2C",
  args: {},
  render: su2cRender,
};
export const UserBlockCustomAvatarSU2C: Story = {
  name: "UserBlock Custom Avatar SU2C",
  args: {
    avatarUrl: "https://via.placeholder.com/300/2e008b/d9318a?text=avatar",
  },
  render: su2cRender,
};
export const UserBlockWithExtraSU2C: Story = {
  name: "UserBlock Custom Avatar SU2C",
  args: {
    extra: (
      <Text>
        <IconFa faIcon={faClock} /> Just now
      </Text>
    ),
  },
  render: su2cRender,
};

/// Bowelbabe

const bowelbabeRender = (args: UserBlockProps) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <UserBlock {...args} />
  </ThemeProvider>
);

export const ErrorTextBowelbabe: Story = {
  name: "ErrorTextBowelbabe",
  args: {},
  render: bowelbabeRender,
};

export const UserBlockDefaultBowelbabe: Story = {
  name: "UserBlock Bowelbabe",
  args: {},
  render: bowelbabeRender,
};

export const UserBlockCustomAvatarBowelbabe: Story = {
  name: "UserBlock Custom Avatar Bowelbabe",
  args: {
    avatarUrl: "https://via.placeholder.com/300/2e008b/d9318a?text=avatar",
  },
  render: bowelbabeRender,
};

export const UserBlockWithExtraBowelbabe: Story = {
  name: "UserBlock Custom Avatar Bowelbabe",
  args: {
    extra: (
      <Text>
        <IconFa faIcon={faClock} /> Just now
      </Text>
    ),
  },
  render: bowelbabeRender,
};
