import React from "react";
import { StoryObj } from "@storybook/react";

import Link from ".";
import AllThemesWrapper from "../AllThemesWrapper";
import { crukTheme } from "..";

export default {
  title: "Link",
  component: Link,
  args: {
    appearance: undefined,
    href: "http://www.google.com",
    children: "Default link",
    rel: undefined,
    target: undefined,
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  name: "Default",
  args: {},
  render: (args) => (
    <AllThemesWrapper>
      <Link {...args} />
    </AllThemesWrapper>
  ),
};

export const Primary: Story = {
  name: "Primary",
  args: {
    appearance: "primary",
  },
  render: (args) => (
    <AllThemesWrapper>
      <Link {...args} />
    </AllThemesWrapper>
  ),
};

export const Secondary: Story = {
  name: "Secondary",
  args: {
    appearance: "secondary",
  },
  render: (args) => (
    <AllThemesWrapper>
      <Link {...args} />
    </AllThemesWrapper>
  ),
};

export const WithImage: Story = {
  name: "WithImage",
  args: {
    children: (
      <img
        style={{ width: "80px", height: "30px" }}
        alt=""
        src={`${crukTheme.siteConfig.assetPath}images/logos/cruk-160.png`}
      />
    ),
  },
  render: (args) => (
    <AllThemesWrapper>
      <Link {...args} />
    </AllThemesWrapper>
  ),
};
