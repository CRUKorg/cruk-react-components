import React from "react";
import { StoryObj } from "@storybook/react";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import { Text, IconFa } from "..";
import UserBlock from ".";
import AllThemesWrapper from "../AllThemesWrapper";

export default {
  title: "UserBlock (experimental)",
  component: UserBlock,
  args: {
    name: "Sam Smith",
    size: "s",
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof UserBlock>;

export const UserBlockDefault: Story = {
  name: "UserBlock",
  args: {},
  render: (args) => (
    <AllThemesWrapper>
      <UserBlock {...args} />
    </AllThemesWrapper>
  ),
};

export const UserBlockCustomAvatar: Story = {
  name: "UserBlock Custom Avatar",
  args: {
    avatarUrl: "https://via.placeholder.com/300/2e008b/d9318a?text=avatar",
  },
  render: (args) => (
    <AllThemesWrapper>
      <UserBlock {...args} />
    </AllThemesWrapper>
  ),
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
  render: (args) => (
    <AllThemesWrapper>
      <UserBlock {...args} />
    </AllThemesWrapper>
  ),
};
