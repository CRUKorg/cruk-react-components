import React from "react";
import { ThemeProvider } from "styled-components";
import { StoryObj, Meta } from "@storybook/react";

import { bowelbabeTheme, su2cTheme } from "..";
import Text, { TextProps } from ".";

export default {
  title: "Text",
  component: Text,
  args: {
    children: "This is text it defaults to a paragraph tag",
    textColor: "textDark",
  },
  tags: ["autodocs"],
} as Meta<TextProps>;

type Story = StoryObj<typeof Text>;

export const TextDefault: Story = {
  name: "TextDefault",
  args: {},
};

/// SU2C

const su2cRender = (args: TextProps) => (
  <ThemeProvider theme={su2cTheme}>
    <Text {...args} />
  </ThemeProvider>
);

export const TextSU2C: Story = {
  name: "TextSU2C",
  args: {},
  render: su2cRender,
};

/// Bowelbabe

const bowelbabeRender = (args: TextProps) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <Text {...args} />
  </ThemeProvider>
);

export const TextBowelbabe: Story = {
  name: "TextBowelbabe",
  args: {},
  render: bowelbabeRender,
};
