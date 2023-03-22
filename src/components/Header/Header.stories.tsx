import React from "react";
import { Story, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { su2cTheme, Button, GlobalStyle, bowelbabeTheme } from "..";
import Header, { HeaderProps } from ".";

export default {
  title: "Header (experimental)",
  component: Header,
} as Meta<HeaderProps>;

const Template: Story<HeaderProps> = (args) => (
  <div>
    <Header {...args} />
    <div style={{ height: "200vh" }}></div>
  </div>
);

export const HeaderDefault: Story<HeaderProps> = Template.bind({});
HeaderDefault.args = {
  siteSlogan: "Header slogan here",
  children: <Button>Log in</Button>,
  isSticky: false,
  fullWidth: false,
};

const TemplateWithSU2C: Story<HeaderProps> = (args) => (
  <ThemeProvider theme={su2cTheme}>
    <GlobalStyle />
    <Header {...args} />
  </ThemeProvider>
);

export const SU2CHeader: Story = TemplateWithSU2C.bind({});
SU2CHeader.storyName = "SU2C Header";
SU2CHeader.args = {
  siteSlogan: "Header slogan here",
  children: <Button>Child component</Button>,
  isSticky: false,
  fullWidth: false,
};

const TemplateWithBowelbabe: Story<HeaderProps> = (args) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <GlobalStyle />
    <Header {...args} />
  </ThemeProvider>
);

export const BowelbabeHeader: Story = TemplateWithBowelbabe.bind({});
BowelbabeHeader.storyName = "Bowelbabe Header";
BowelbabeHeader.args = {
  siteSlogan: "Header slogan here",
  children: <Button>Log in</Button>,
  isSticky: false,
  fullWidth: false,
};
