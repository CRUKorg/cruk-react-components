import React from "react";
import { type StoryObj } from "@storybook/react-vite";
import {
  faPoundSign,
  faSearch,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

import { AllThemesWrapper } from "../AllThemesWrapper";
import { colours, IconFa } from "..";
import { Badge } from ".";
import "./styles.css";

export default {
  title: "Badge",
  component: Badge,
  args: {
    backgroundColor: "primary",
    textColor: "text-on-primary",
    size: "m",
    borderColor: "transparent",
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "s", "m", "l", "xl"],
    },
    textColor: {
      control: "select",
      options: [...colours, ""],
    },
    backgroundColor: {
      control: "select",
      options: [...colours, ""],
    },
    borderColor: {
      control: "select",
      options: [...colours, ""],
    },
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: <IconFa faIcon={faPoundSign} />,
  },
  render: (args) => (
    <AllThemesWrapper>
      <Badge {...args} />
    </AllThemesWrapper>
  ),
};

export const BadgeWithText: Story = {
  name: "BadgeWithText",
  args: {
    children: "this is text",
    backgroundColor: "primary",
  },
  render: (args) => (
    <AllThemesWrapper>
      <Badge {...args} />
    </AllThemesWrapper>
  ),
};

export const BadgeWithColour: Story = {
  name: "BadgeWithColour",
  args: {
    backgroundColor: "secondary",
    children: <IconFa faIcon={faSearch} />,
  },
  render: (args) => (
    <AllThemesWrapper>
      <Badge {...args} />
    </AllThemesWrapper>
  ),
};

export const BadgeWithInverseColours: Story = {
  name: "BadgeWithInverseColours",
  args: {
    backgroundColor: "text-light",
    textColor: "tertiary",
    borderColor: "tertiary",
    children: <IconFa faIcon={faComment} />,
  },
  render: (args) => (
    <AllThemesWrapper>
      <Badge {...args} />
    </AllThemesWrapper>
  ),
};
