import React from "react";
import { Story, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, su2cTheme } from "..";
import Icon, { IconProps } from ".";

export default {
  title: "Icon",
  component: Icon,
} as Meta<IconProps>;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const IconDefault: Story<IconProps> = Template.bind({});
IconDefault.storyName = "Icon";
IconDefault.args = {
  name: "comment",
};

const TemplateWithSU2C: Story<IconProps> = (args) => (
  <ThemeProvider theme={su2cTheme}>
    <GlobalStyle />
    <Icon {...args} />
  </ThemeProvider>
);

export const SU2CIcon: Story<IconProps> = TemplateWithSU2C.bind({});
SU2CIcon.storyName = "SU2C Icon";
SU2CIcon.args = {
  name: "comment",
};
