import React from "react";
import { StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { su2cTheme, Text, Box, bowelbabeTheme } from "..";
import Collapse, { CollapseProps } from ".";

export default {
  title: "Collapse (experimental)",
  component: Collapse,
  args: {
    id: "default",
    headerTitleText: "Lorem Ipsum",
    children: (
      <Text>
        {`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of`}
      </Text>
    ),
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Collapse>;

export const CollapseWithTextHeader: Story = {
  name: "CollapseWithTextHeader",
  args: {},
};

export const CollapseWithModifiedText: Story = {
  name: "CollapseWithModifiedText",
  args: {
    headerTitleText:
      "A long title with headerTitleTextColor and headerTitleTextSize",
    headerTitleTextColor: "primary",
    headerTitleTextSize: "xl",
  },
};

export const CollapseWitCustomHeader: Story = {
  name: "CollapseWithModifiedText",
  args: {
    id: "custom",
    headerComponent: (
      <Box backgroundColor="primary">
        <Text textColor="textOnPrimary">This is box header click me</Text>
      </Box>
    ),
    children: (
      <Box backgroundColor="primary">
        <Text textColor="textOnPrimary">This is box</Text>
      </Box>
    ),
  },
};

/// SU2C

const su2cRender = (args: CollapseProps) => (
  <ThemeProvider theme={su2cTheme}>
    <Collapse {...args} />
  </ThemeProvider>
);

export const CollapseWithTextHeaderSU2C: Story = {
  name: "CollapseWithTextHeaderSU2C",
  args: {},
  render: su2cRender,
};

export const CollapseWithModifiedTextSU2C: Story = {
  name: "CollapseWithModifiedTextSU2C",
  args: {
    headerTitleText:
      "A long title with headerTitleTextColor and headerTitleTextSize",
    headerTitleTextColor: "primary",
    headerTitleTextSize: "xl",
  },
  render: su2cRender,
};

export const CollapseWitCustomHeaderSU2C: Story = {
  name: "CollapseWithModifiedTextSU2C",
  args: {
    id: "custom",
    headerComponent: (
      <Box backgroundColor="primary">
        <Text textColor="textOnPrimary">This is box header click me</Text>
      </Box>
    ),
  },
  render: su2cRender,
};

/// Bowelbabe

const bowelbabeRender = (args: CollapseProps) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <Collapse {...args} />
  </ThemeProvider>
);

export const CollapseWithTextHeaderBowelbabe: Story = {
  name: "CollapseWithTextHeaderBowelbabe",
  args: {},
  render: bowelbabeRender,
};

export const CollapseWithModifiedTextBowelbabe: Story = {
  name: "CollapseWithModifiedTextBowelbabe",
  args: {
    headerTitleText:
      "A long title with headerTitleTextColor and headerTitleTextSize",
    headerTitleTextColor: "primary",
    headerTitleTextSize: "xl",
  },
  render: bowelbabeRender,
};

export const CollapseWitCustomHeaderBowelbabe: Story = {
  name: "CollapseWitCustomHeaderBowelbabe",
  args: {
    id: "custom",
    headerComponent: (
      <Box backgroundColor="primary">
        <Text textColor="textOnPrimary">This is box header click me</Text>
      </Box>
    ),
  },
  render: bowelbabeRender,
};
