import React from "react";
import { StoryObj } from "@storybook/react";
import {
  faPoundSign,
  faSearch,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

import { IconFa } from "..";
import Badge from ".";
import AllThemesWrapper from "../AllThemesWrapper";

export default {
  title: "Badge",
  component: Badge,
  args: {
    borderColor: "primary",
    backgroundColor: "primary",
    textColor: "textOnPrimary",
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  name: "Default",
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
    backgroundColor: "textLight",
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
