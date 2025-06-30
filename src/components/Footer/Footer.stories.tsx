import React from "react";
import { type StoryObj } from "@storybook/react-vite";

import { Link } from "..";
import Footer, { type FooterProps } from ".";
import AllThemesWrapper from "../AllThemesWrapper";

const FooterWithChildren = (args: FooterProps) => (
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
  render: (args: FooterProps) => (
    <AllThemesWrapper>
      <FooterWithChildren {...args} />
    </AllThemesWrapper>
  ),
};
