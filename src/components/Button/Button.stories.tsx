import React from "react";
import { type StoryObj } from "@storybook/react-vite";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import IconFa from "../IconFa";

import { Button } from "./";
import "./styles.css";

import AllThemesWrapper from "../AllThemesWrapper";

export default {
  title: "Button",
  component: Button,
  args: {
    appearance: "primary",
    disabled: false,
    children: "A button",
    full: false,
  },
  argTypes: {
    full: {
      control: "boolean",
    },
    isIconButton: {
      control: "boolean",
    },
    appearance: {
      control: "select",
      options: ["primary", "secondary", "tertiary", ""],
    },
    as: {
      control: "select",
      options: ["button", "a", "div"],
    },
    href: {
      control: "text",
    },
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <AllThemesWrapper>
      <Button {...args} />
    </AllThemesWrapper>
  ),
};

export const Primary: Story = {
  args: {
    appearance: "primary",
  },
  render: (args) => (
    <AllThemesWrapper>
      <Button {...args} />
    </AllThemesWrapper>
  ),
};

export const PrimaryAnchorButton: Story = {
  name: "PrimaryAnchorButton",
  args: {
    appearance: "primary",
    href: "https://www.cancerresearchuk.org/",
  },
  render: (args) => (
    <AllThemesWrapper>
      <Button {...args} />
    </AllThemesWrapper>
  ),
};

export const Secondary: Story = {
  args: {
    appearance: "secondary",
  },
  render: (args) => (
    <AllThemesWrapper>
      <Button {...args} />
    </AllThemesWrapper>
  ),
};

export const Tertiary: Story = {
  args: {
    appearance: "tertiary",
  },
  render: (args) => (
    <AllThemesWrapper>
      <Button {...args} />
    </AllThemesWrapper>
  ),
};

export const WithIcons: Story = {
  name: "WithIcons",
  args: {
    children: (
      <>
        <IconFa faIcon={faClock} />
        <span>A Button</span>
        <IconFa faIcon={faClock} />
      </>
    ),
  },
  render: (args) => (
    <AllThemesWrapper>
      <Button {...args} />
    </AllThemesWrapper>
  ),
};

export const IconButton: Story = {
  name: "IconButton",
  args: {
    children: <IconFa faIcon={faClock} size="s" />,
  },
  render: (args) => (
    <AllThemesWrapper>
      <Button {...args} />
    </AllThemesWrapper>
  ),
};
