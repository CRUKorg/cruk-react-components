import React from "react";
import { type StoryObj } from "@storybook/react-vite";

import { bowelbabeTheme, Button, crukTheme, rflTheme, su2cTheme } from "..";
import Header from ".";

import { ThemeProvider } from "styled-components";

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
        <ThemeProvider theme={crukTheme}>
          <HeaderInTallContainer {...args} themeName="cruk" />
          <Line />
        </ThemeProvider>
      </div>
      <div data-theme="rfl">
        <h2>RFL Theme:</h2>
        <ThemeProvider theme={rflTheme}>
          <HeaderInTallContainer {...args} themeName="rfl" />
          <Line />
        </ThemeProvider>
      </div>
      <div data-theme="su2c">
        <h2>SU2C Theme:</h2>
        <ThemeProvider theme={su2cTheme}>
          <HeaderInTallContainer {...args} themeName="su2c" />
          <Line />
        </ThemeProvider>
      </div>
      <div data-theme="bowelbabe">
        <h2>Bowelbabe Theme:</h2>
        <ThemeProvider theme={bowelbabeTheme}>
          <HeaderInTallContainer {...args} themeName="bowelbabe" />
          <Line />
        </ThemeProvider>
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
    <ThemeProvider theme={crukTheme}>
      <HeaderInTallContainer {...args} />
    </ThemeProvider>
  ),
};
