import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { bowelbabeTheme, su2cTheme } from "..";
import Loader from ".";

export default {
  title: "Loader",
  component: Loader,
  args: {},
  tags: ["autodocs"],
} as Meta<{}>;

type Story = StoryObj<typeof Loader>;

export const LoaderDefault: Story = {
  name: "Loader",
  args: {},
};

/// SU2C

const su2cRender = () => (
  <ThemeProvider theme={su2cTheme}>
    <Loader />
  </ThemeProvider>
);

export const LoaderSU2C: Story = {
  name: "Loader SU2C",
  args: {},
  render: su2cRender,
};

/// Bowelbabe

const bowelbabeRender = () => (
  <ThemeProvider theme={bowelbabeTheme}>
    <Loader />
  </ThemeProvider>
);

export const LoaderBowelbabe: Story = {
  name: "Loader Bowelbabe",
  args: {},
  render: bowelbabeRender,
};
