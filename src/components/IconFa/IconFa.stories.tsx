import React from "react";
import { Story, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { GlobalStyle, su2cTheme, IconFa } from "..";
import { IconFaProps } from ".";

export default {
  title: "IconFa",
  component: IconFa,
} as Meta<IconFaProps>;

const Template: Story<IconFaProps> = (args) => <IconFa {...args} />;

export const IconDefault: Story<IconFaProps> = Template.bind({});
IconDefault.storyName = "IconFa";
IconDefault.args = {
  faIcon: faBullseye,
};

const TemplateWithSU2C: Story<IconFaProps> = (args) => (
  <ThemeProvider theme={su2cTheme}>
    <GlobalStyle />
    <IconFa {...args} />
  </ThemeProvider>
);

export const SU2CIcon: Story<IconFaProps> = TemplateWithSU2C.bind({});
SU2CIcon.storyName = "SU2C IconFa";
SU2CIcon.args = {
  faIcon: faBullseye,
};
