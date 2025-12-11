import React from "react";
import { type StoryObj } from "@storybook/react-vite";
import { ThemeProvider } from "styled-components";

import { bowelbabeTheme, crukTheme, Link, rflTheme, su2cTheme } from "..";
import Footer from ".";

const FooterWithChildren = (args: React.ComponentProps<typeof Footer>) => (
  <Footer {...args}>
    <Link
      appearance="primary"
      href="https://www.cancerresearchuk.org/about-us/contact-us"
    >
      Contact us
    </Link>
    <Link
      appearance="primary"
      href="https://www.cancerresearchuk.org/privacy-statement"
    >
      Privacy
    </Link>
  </Footer>
);

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

export const AllThemesWrapper = ({
  ...args
}: React.ComponentProps<typeof FooterWithChildren>) => (
  <main>
    <div tabIndex={0}>
      <h2>CRUK Theme:</h2>
      <div data-theme="cruk">
        <ThemeProvider theme={crukTheme}>
          <FooterWithChildren {...args} themeName="cruk" />
          <Line />
        </ThemeProvider>
      </div>
      <div data-theme="rfl">
        <h2>RFL Theme:</h2>
        <ThemeProvider theme={rflTheme}>
          <FooterWithChildren {...args} themeName="rfl" />
          <Line />
        </ThemeProvider>
      </div>
      <div data-theme="su2c">
        <h2>SU2C Theme:</h2>
        <ThemeProvider theme={su2cTheme}>
          <FooterWithChildren {...args} themeName="su2c" />
          <Line />
        </ThemeProvider>
      </div>
      <div data-theme="bowelbabe">
        <h2>Bowelbabe Theme:</h2>
        <ThemeProvider theme={bowelbabeTheme}>
          <FooterWithChildren {...args} themeName="bowelbabe" />
          <Line />
        </ThemeProvider>
      </div>
    </div>
  </main>
);

export default {
  title: "Footer (experimental)",
  component: Footer,
  render: FooterWithChildren,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Footer>;

export const FooterDefault: Story = {
  name: "FooterDefault",
  args: {},
  argTypes: {
    footerText: { control: "text" },
  },
  render: (args: React.ComponentProps<typeof Footer>) => (
    <AllThemesWrapper {...args} />
  ),
};
