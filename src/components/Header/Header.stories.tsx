import React from "react";
import { StoryObj } from "@storybook/react";

import { Button } from "..";
import Header, { HeaderProps } from ".";
import AllThemesWrapper from "../AllThemesWrapper";

const HeaderInTallContainer = (args: HeaderProps) => (
  <div>
    <Header {...args} />
    <div style={{ height: "200px" }}></div>
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
};

type Story = StoryObj<typeof Header>;

export const HeaderDefault: Story = {
  name: "HeaderDefault",
  render: (args: HeaderProps) => (
    <AllThemesWrapper>
      <HeaderInTallContainer {...args} />
    </AllThemesWrapper>
  ),
};

export const HeaderFullWidth: Story = {
  name: "HeaderFullWidth",
  args: {
    fullWidth: true,
  },
  render: (args: HeaderProps) => (
    <AllThemesWrapper>
      <HeaderInTallContainer {...args} />
    </AllThemesWrapper>
  ),
};

export const HeaderSticky: Story = {
  name: "HeaderSticky",
  args: {
    isSticky: true,
    fullWidth: true,
  },
  render: (args: HeaderProps) => <HeaderInTallContainer {...args} />,
};
