import React from "react";
import { type StoryObj } from "@storybook/react-vite";

import { Text, Box } from "..";
import AllThemesWrapper from "../AllThemesWrapper";
import Collapse from ".";
import "./styles.css";
import "../Box/styles.css";
import "../Text/styles.css";

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
  render: (args) => (
    <AllThemesWrapper>
      <Collapse {...args} />
    </AllThemesWrapper>
  ),
};

export const CollapseWithModifiedText: Story = {
  name: "CollapseWithModifiedText",
  args: {
    headerTitleText:
      "A long title with headerTitleTextColor and headerTitleTextSize",
    headerTitleTextColor: "text-dark",
    headerTitleTextSize: "xl",
  },
  render: (args) => (
    <AllThemesWrapper>
      <Collapse {...args} />
    </AllThemesWrapper>
  ),
};

export const CollapseWitCustomHeader: Story = {
  name: "CollapseWithModifiedText",
  args: {
    id: "custom",
    headerComponent: (
      <Box backgroundColor="primary">
        <Text textColor="text-on-primary">This is box header click me</Text>
      </Box>
    ),
    children: (
      <Box backgroundColor="primary">
        <Text textColor="text-on-primary">This is box</Text>
      </Box>
    ),
  },
  render: (args) => (
    <AllThemesWrapper>
      <Collapse {...args} />
    </AllThemesWrapper>
  ),
};
