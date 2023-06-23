import React from "react";
import { StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { Text, su2cTheme, bowelbabeTheme } from "..";
import Box, { BoxProps } from ".";

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
};

export const BoxWithColour: Story = {
  name: "BoxWithColour",
  args: {
    backgroundColor: "primary",
    children: <Text textColor="textOnPrimary">this is a box with colours</Text>,
  },
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
};

/// SU2C

const su2cRender = (args: BoxProps) => (
  <ThemeProvider theme={su2cTheme}>
    <Box {...args} />
  </ThemeProvider>
);

export const DefaultSU2C: Story = {
  name: "DefaultSU2C",
  args: {
    children: <Text textColor="textDark">this is a box</Text>,
  },
  render: su2cRender,
};

export const BoxWithColourSU2C: Story = {
  name: "BoxWithColourSU2C",
  args: {
    backgroundColor: "primary",
    children: <Text textColor="textOnPrimary">this is a box with colours</Text>,
  },
  render: su2cRender,
};

export const BoxWithColourWithCustomSpacingSU2C: Story = {
  name: "BoxWithColourWithCustomSpacingSU2C",
  args: {
    backgroundColor: "primary",
    paddingVertical: "xl",
    paddingBottom: "xs",
    children: (
      <Text textColor="textOnPrimary">this is a box with custom spacing</Text>
    ),
  },
  render: su2cRender,
};

/// bowelbabe

const bowelbabeRender = (args: BoxProps) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <Box {...args} />
  </ThemeProvider>
);

export const DefaultBowelBabe: Story = {
  name: "DefaultBowelBabe",
  args: {
    children: <Text textColor="textDark">this is a box</Text>,
  },
  render: bowelbabeRender,
};

export const BoxWithColourBowelBabe: Story = {
  name: "BoxWithColourBowelBabe",
  args: {
    backgroundColor: "primary",
    children: <Text textColor="textOnPrimary">this is a box with colours</Text>,
  },
  render: bowelbabeRender,
};

export const BoxWithColourWithCustomSpacingBowelBabe: Story = {
  name: "BoxWithColourWithCustomSpacingBowelBabe",
  args: {
    backgroundColor: "primary",
    paddingVertical: "xl",
    paddingBottom: "xs",
    children: (
      <Text textColor="textOnPrimary">this is a box with custom spacing</Text>
    ),
  },
  render: bowelbabeRender,
};
