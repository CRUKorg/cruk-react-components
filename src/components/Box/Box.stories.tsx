import React from "react";
import { type StoryObj } from "@storybook/react-vite";

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
  args: {
    children: <Text textColor="textDark">this is a box</Text>,
  },
  argTypes: {
    margin: {
      control: "select",
      options: ["none", "xs", "s", "m", "l", "xl"],
    },
    marginTop: {
      control: "select",
      options: ["none", "xs", "s", "m", "l", "xl"],
    },
    marginRight: {
      control: "select",
      options: ["none", "xs", "s", "m", "l", "xl"],
    },
    marginBottom: {
      control: "select",
      options: ["none", "xs", "s", "m", "l", "xl"],
    },
    marginLeft: {
      control: "select",
      options: ["none", "xs", "s", "m", "l", "xl"],
    },
    marginVertical: {
      control: "select",
      options: ["none", "xs", "s", "m", "l", "xl"],
    },
    marginHorizontal: {
      control: "select",
      options: ["none", "xs", "s", "m", "l", "xl"],
    },
    padding: {
      control: "select",
      options: ["none", "xs", "s", "m", "l", "xl"],
    },
    paddingTop: {
      control: "select",
      options: ["none", "xs", "s", "m", "l", "xl"],
    },
    paddingRight: {
      control: "select",
      options: ["none", "xs", "s", "m", "l", "xl"],
    },
    paddingBottom: {
      control: "select",
      options: ["none", "xs", "s", "m", "l", "xl"],
    },
    paddingLeft: {
      control: "select",
      options: ["none", "xs", "s", "m", "l", "xl"],
    },
    paddingVertical: {
      control: "select",
      options: ["none", "xs", "s", "m", "l", "xl"],
    },
    paddingHorizontal: {
      control: "select",
      options: ["none", "xs", "s", "m", "l", "xl"],
    },
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
