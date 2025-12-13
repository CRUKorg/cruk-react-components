import React from "react";
import { type StoryObj } from "@storybook/react-vite";

import { Avatar } from ".";

const Line = () => (
  <div
    style={{
      width: "100%",
      height: "1px",
      backgroundColor: "#000",
      margin: "1em 0",
    }}
  />
);

const AllThemesWrapper = ({ ...args }: React.ComponentProps<typeof Avatar>) => (
  <main>
    <div tabIndex={0}>
      <h2>CRUK Theme:</h2>
      <div data-theme="cruk">
        <Avatar {...args} themeName="cruk" />
        <Line />
      </div>
      <div data-theme="rfl">
        <h2>RFL Theme:</h2>
        <Avatar {...args} themeName="rfl" />
        <Line />
      </div>
      <div data-theme="su2c">
        <h2>SU2C Theme:</h2>
        <Avatar {...args} themeName="su2c" />
        <Line />
      </div>
      <div data-theme="bowelbabe">
        <h2>Bowelbabe Theme:</h2>
        <Avatar {...args} themeName="bowelbabe" />
        <Line />
      </div>
    </div>
  </main>
);

export default {
  title: "Avatar",
  component: Avatar,
  args: {
    name: "Sam",
    size: "s",
    alt: "sam's profile",
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["s", "m", "l", "xl"],
    },
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: (args) => <AllThemesWrapper {...args} />,
};

export const Small: Story = {
  args: {
    size: "s",
  },
  render: (args) => <AllThemesWrapper {...args} />,
};

export const Medium: Story = {
  args: {
    size: "m",
  },
  render: (args) => <AllThemesWrapper {...args} />,
};

export const Large: Story = {
  args: {
    size: "l",
  },
  render: (args) => <AllThemesWrapper {...args} />,
};

export const ExtraLarge: Story = {
  args: {
    size: "xl",
  },
  render: (args) => <AllThemesWrapper {...args} />,
};

export const CustomImage: Story = {
  name: "CustomImage",
  args: {
    size: "xl",
    url: `https://rcl.assets.cancerresearchuk.org/images/logos/cruk-160.png`,
  },
  render: (args) => <AllThemesWrapper {...args} />,
};
