import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { su2cTheme, Button, bowelbabeTheme } from "..";
import Header, { HeaderProps } from ".";

const HeaderInTallContainer = (args: HeaderProps) => (
  <div>
    <Header {...args} />
    <div style={{ height: "200vh" }}></div>
  </div>
);

export default {
  title: "Header (experimental)",
  component: Header,
  args: {
    siteSlogan: "Header slogan here",
    children: <Button>Log in</Button>,
    isSticky: false,
    fullWidth: false,
  },
  tags: ["autodocs"],
} as Meta<HeaderProps>;

type Story = StoryObj<typeof Header>;

export const HeaderDefault: Story = {
  name: "HeaderDefault",
  render: HeaderInTallContainer,
};

export const HeaderFullWidth: Story = {
  name: "HeaderFullWidth",
  render: HeaderInTallContainer,
  args: {
    fullWidth: true,
  },
};

export const HeaderSticky: Story = {
  name: "HeaderSticky",
  render: HeaderInTallContainer,
  args: {
    isSticky: true,
    fullWidth: true,
  },
};

/// SU2C

const su2cRender = (args: HeaderProps) => (
  <ThemeProvider theme={su2cTheme}>
    <HeaderInTallContainer {...args} />
  </ThemeProvider>
);

export const HeaderSU2C: Story = {
  name: "HeaderSU2C",
  render: su2cRender,
};

/// Bowelbabe

const bowelbabeRender = (args: HeaderProps) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <HeaderInTallContainer {...args} />
  </ThemeProvider>
);

export const HeaderBowelbabe: Story = {
  name: "HeaderBowelbabe",
  render: bowelbabeRender,
};
