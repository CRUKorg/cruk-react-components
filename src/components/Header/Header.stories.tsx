import React from "react";
import { type StoryObj } from "@storybook/react-vite";

import { Button } from "..";
import Header from ".";

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

const AllThemesWrapper = ({
  ...args
}: React.ComponentProps<typeof HeaderInTallContainer>) => (
  <main>
    <div tabIndex={0}>
      <h2>CRUK Theme:</h2>
      <div data-theme="cruk">
        <HeaderInTallContainer {...args} themeName="cruk" />
        <Line />
      </div>
      <div data-theme="rfl">
        <h2>RFL Theme:</h2>
        <HeaderInTallContainer {...args} themeName="rfl" />
        <Line />
      </div>
      <div data-theme="su2c">
        <h2>SU2C Theme:</h2>
        <HeaderInTallContainer {...args} themeName="su2c" />
        <Line />
      </div>
      <div data-theme="bowelbabe">
        <h2>Bowelbabe Theme:</h2>
        <HeaderInTallContainer {...args} themeName="bowelbabe" />
        <Line />
      </div>
    </div>
  </main>
);

type HeaderProps = React.ComponentProps<typeof Header>;

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
  render: (args: HeaderProps) => <AllThemesWrapper {...args} />,
};

export const HeaderFullWidth: Story = {
  name: "HeaderFullWidth",
  args: {
    fullWidth: true,
  },
  render: (args: HeaderProps) => <AllThemesWrapper {...args} />,
};

export const HeaderSticky: Story = {
  name: "HeaderSticky",
  args: {
    isSticky: true,
    fullWidth: true,
  },
  render: (args: HeaderProps) => (
    <div data-theme="cruk">
      <HeaderInTallContainer {...args} />
    </div>
  ),
};
