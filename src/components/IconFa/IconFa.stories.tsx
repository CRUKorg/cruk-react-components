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

export const IconFaDefault: Story<IconFaProps> = Template.bind({});
IconFaDefault.storyName = "IconFa";
IconFaDefault.args = {
  faIcon: faBullseye,
};

const TemplateWithSU2C: Story<IconFaProps> = (args) => (
  <ThemeProvider theme={su2cTheme}>
    <GlobalStyle />
    <IconFa {...args} />
  </ThemeProvider>
);

export const SU2CIconFa: Story<IconFaProps> = TemplateWithSU2C.bind({});
SU2CIconFa.storyName = "SU2C IconFa";
SU2CIconFa.args = {
  faIcon: faBullseye,
};

const TemplateWithBowelbabe: Story<IconFaProps> = (args) => (
  <ThemeProvider theme={su2cTheme}>
    <GlobalStyle />
    <IconFa {...args} />
  </ThemeProvider>
);

export const BowelbabeIconFa: Story<IconFaProps> = TemplateWithBowelbabe.bind(
  {}
);
BowelbabeIconFa.storyName = "Bowelbabe IconFa";
BowelbabeIconFa.args = {
  faIcon: faBullseye,
};
