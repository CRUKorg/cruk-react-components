import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import {
  faPoundSign,
  faSearch,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

import { su2cTheme, IconFa, bowelbabeTheme } from "..";
import Badge, { BadgeProps } from ".";

export default {
  title: "Badge",
  component: Badge,
  args: {
    borderColor: "primary",
    backgroundColor: "primary",
    textColor: "textOnPrimary",
  },
  tags: ["autodocs"],
} as Meta<BadgeProps>;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  name: "Default",
  args: {
    children: <IconFa faIcon={faPoundSign} />,
  },
};

export const BadgeWithText: Story = {
  name: "BadgeWithText",
  args: {
    children: "this is text",
    backgroundColor: "primary",
  },
};

export const BadgeWithColour: Story = {
  name: "BadgeWithColour",
  args: {
    backgroundColor: "secondary",
    children: <IconFa faIcon={faSearch} />,
  },
};

export const BadgeWithInverseColours: Story = {
  name: "BadgeWithInverseColours",
  args: {
    backgroundColor: "textLight",
    textColor: "tertiary",
    borderColor: "tertiary",
    children: <IconFa faIcon={faComment} />,
  },
};

/// SU2C

const su2cRender = (args: BadgeProps) => (
  <ThemeProvider theme={su2cTheme}>
    <Badge {...args} />
  </ThemeProvider>
);

export const DefaultSU2C: Story = {
  name: "DefaultSU2C",
  args: {
    children: <IconFa faIcon={faPoundSign} />,
  },
  render: su2cRender,
};

export const BadgeWithTextSU2C: Story = {
  name: "BadgeWithTextSU2C",
  args: {
    children: "this is text",
    backgroundColor: "primary",
  },
  render: su2cRender,
};

export const BadgeWithColourSU2C: Story = {
  name: "BadgeWithColourSU2C",
  args: {
    backgroundColor: "secondary",
    children: <IconFa faIcon={faSearch} />,
  },
  render: su2cRender,
};

export const BadgeWithInverseColoursSU2C: Story = {
  name: "BadgeWithInverseColoursSU2C",
  args: {
    backgroundColor: "textLight",
    textColor: "tertiary",
    borderColor: "tertiary",
    children: <IconFa faIcon={faComment} />,
  },
  render: su2cRender,
};

/// bowelbabe

const bowelbabeRender = (args: BadgeProps) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <Badge {...args} />
  </ThemeProvider>
);

export const DefaultBowelbabe: Story = {
  name: "DefaultBowelbabe",
  args: {
    children: <IconFa faIcon={faPoundSign} />,
  },
  render: bowelbabeRender,
};

export const BadgeWithTextBowelbabe: Story = {
  name: "BadgeWithTextBowelbabe",
  args: {
    children: "this is text",
    backgroundColor: "primary",
  },
  render: bowelbabeRender,
};

export const BadgeWithColourBowelbabe: Story = {
  name: "BadgeWithColourBowelbabe",
  args: {
    backgroundColor: "secondary",
    children: <IconFa faIcon={faSearch} />,
  },
  render: bowelbabeRender,
};

export const BadgeWithInverseColoursBowelbabe: Story = {
  name: "BadgeWithInverseColoursBowelbabe",
  args: {
    backgroundColor: "textLight",
    textColor: "tertiary",
    borderColor: "tertiary",
    children: <IconFa faIcon={faComment} />,
  },
  render: bowelbabeRender,
};
