import React from "react";
import { StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { su2cTheme, bowelbabeTheme, IconFa } from "..";
import { IconFaProps } from ".";

export default {
  title: "IconFa",
  component: IconFa,
  args: {
    faIcon: faBullseye,
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof IconFa>;

export const IconFADefault: Story = {
  name: "IconFA Default",
  args: {},
};

/// SU2C

const su2cRender = (args: IconFaProps) => (
  <ThemeProvider theme={su2cTheme}>
    <IconFa {...args} />
  </ThemeProvider>
);

export const IconSU2C: Story = {
  name: "IconFA SU2C",
  args: {},
  render: su2cRender,
};

/// Bowelbabe

const bowelbabeRender = (args: IconFaProps) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <IconFa {...args} />
  </ThemeProvider>
);

export const IconBowelbabe: Story = {
  name: "IconFA Bowelbabe",
  args: {},
  render: bowelbabeRender,
};
