import React from "react";
import { type StoryObj } from "@storybook/react-vite";
import Heading from ".";
import AllThemesWrapper from "../AllThemesWrapper";

export default {
  title: "Heading",
  component: Heading,
  args: {},
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Heading>;

export const DefaultHeading: Story = {
  name: "DefaultHeading",
  args: {
    children: "H2 is the default",
  },
  render: (args) => (
    <AllThemesWrapper>
      <Heading {...args} />
    </AllThemesWrapper>
  ),
};

export const HeadingSize: Story = {
  name: "HeadingSize",
  args: {
    textSize: "xxxxl",
    children: "This is H2 with H1 size",
  },
  render: (args) => (
    <AllThemesWrapper>
      <Heading {...args} />
    </AllThemesWrapper>
  ),
};

export const HeadingAligned: Story = {
  name: "HeadingAligned",
  args: {
    textAlign: "center",
    children: "This is center aligned",
  },
  render: (args) => (
    <AllThemesWrapper>
      <Heading {...args} />
    </AllThemesWrapper>
  ),
};

export const H1: Story = {
  name: "H1",
  args: {
    h1: true,
    children: "This is H1",
  },
  render: (args) => (
    <AllThemesWrapper>
      <Heading {...args} />
    </AllThemesWrapper>
  ),
};

export const H2: Story = {
  name: "H2",
  args: {
    h2: true,
    children: "This is H2",
  },
  render: (args) => (
    <AllThemesWrapper>
      <Heading {...args} />
    </AllThemesWrapper>
  ),
};

export const H3: Story = {
  name: "H3",
  args: {
    h3: true,
    children: "This is H3",
  },
  render: (args) => (
    <AllThemesWrapper>
      <Heading {...args} />
    </AllThemesWrapper>
  ),
};

export const H4: Story = {
  name: "H4",
  args: {
    h4: true,
    children: "This is H4",
  },
  render: (args) => (
    <AllThemesWrapper>
      <Heading {...args} />
    </AllThemesWrapper>
  ),
};

export const H5: Story = {
  name: "H5",
  args: {
    h5: true,
    children: "This is H5",
  },
  render: (args) => (
    <AllThemesWrapper>
      <Heading {...args} />
    </AllThemesWrapper>
  ),
};

export const H6: Story = {
  name: "H6",
  args: {
    h6: true,
    children: "This is H6",
  },
  render: (args) => (
    <AllThemesWrapper>
      <Heading {...args} />
    </AllThemesWrapper>
  ),
};
