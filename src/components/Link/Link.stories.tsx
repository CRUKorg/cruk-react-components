import React from "react";
import { type StoryObj } from "@storybook/react-vite";

import Link from ".";
import AllThemesWrapper from "../AllThemesWrapper";
import { crukTheme } from "..";

export default {
  title: "Link",
  component: Link,
  args: {
    appearance: undefined,
    href: "https://www.google.com",
    children: "Default link",
    rel: undefined,
    target: undefined,
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <AllThemesWrapper>
      <Link {...args} />
    </AllThemesWrapper>
  ),
};

export const Primary: Story = {
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
