import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { su2cTheme, bowelbabeTheme } from "..";
import Icon, { IconProps } from ".";

export default {
  title: "Icon (deprecated)",
  component: Icon,
  args: {
    name: "comment",
  },
  tags: ["autodocs"],
} as Meta<IconProps>;

type Story = StoryObj<typeof Icon>;

export const IconDefault: Story = {
  name: "IconDefault",
  args: {},
};

/// SU2C

const su2cRender = (args: IconProps) => (
  <ThemeProvider theme={su2cTheme}>
    <Icon {...args} />
  </ThemeProvider>
);

export const IconSU2C: Story = {
  name: "IconSU2C",
  args: {},
  render: su2cRender,
};

/// Bowelbabe

const bowelbabeRender = (args: IconProps) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <Icon {...args} />
  </ThemeProvider>
);

export const IconBowelbabe: Story = {
  name: "IconBowelbabe",
  args: {},
  render: bowelbabeRender,
};
