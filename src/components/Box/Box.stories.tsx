import React from "react";
import { StoryObj } from "@storybook/react";

import { Text } from "..";
import Box from ".";
import AllThemesWrapper from "../AllThemesWrapper";

export default {
  title: "Box",
  component: Box,
  args: {},
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Box>;

export const Default: Story = {
  name: "Default",
  args: {
    children: <Text textColor="textDark">this is a box</Text>,
  },
  render: (args) => (
    <AllThemesWrapper>
      <Box {...args} />
    </AllThemesWrapper>
  ),
};

export const BoxWithColour: Story = {
  name: "BoxWithColour",
  args: {
    backgroundColor: "primary",
    children: <Text textColor="textOnPrimary">this is a box with colours</Text>,
  },
  render: (args) => (
    <AllThemesWrapper>
      <Box {...args} />
    </AllThemesWrapper>
  ),
};

export const BoxWithColourWithCustomSpacing: Story = {
  name: "BoxWithColourWithCustomSpacing",
  args: {
    backgroundColor: "primary",
    paddingVertical: "xl",
    paddingBottom: "xs",
    children: (
      <Text textColor="textOnPrimary">this is a box with custom spacing</Text>
    ),
  },
  render: (args) => (
    <AllThemesWrapper>
      <Box {...args} />
    </AllThemesWrapper>
  ),
};
