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
    children: <Text textColor="text-dark">this is a box</Text>,
  },
  argTypes: {
    margin: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto"],
    },
    marginTop: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto"],
    },
    marginRight: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto"],
    },
    marginBottom: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto"],
    },
    marginLeft: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto"],
    },
    marginVertical: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto"],
    },
    marginHorizontal: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto"],
    },
    padding: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto"],
    },
    paddingTop: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto"],
    },
    paddingRight: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto"],
    },
    paddingBottom: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto"],
    },
    paddingLeft: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto"],
    },
    paddingVertical: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto"],
    },
    paddingHorizontal: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto"],
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
    children: (
      <Text textColor="text-on-primary">this is a box with colours</Text>
    ),
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
      <Text textColor="text-on-primary">this is a box with custom spacing</Text>
    ),
  },
  render: (args) => (
    <AllThemesWrapper>
      <Box {...args} />
    </AllThemesWrapper>
  ),
};
