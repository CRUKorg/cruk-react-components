import React from "react";
import { Story, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, su2cTheme } from "..";
import ProgressBar, { ProgressBarProps } from ".";

export default {
  title: "ProgressBar (experimental)",
  component: ProgressBar,
} as Meta<ProgressBarProps>;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const ProgressBarDefault: Story<ProgressBarProps> = Template.bind({});
ProgressBarDefault.storyName = "ProgressBar";
ProgressBarDefault.args = {
  percentage: 74,
  secondaryPercentage: 90,
};

export const ProgressBarCircular: Story<ProgressBarProps> = Template.bind({});
ProgressBarCircular.storyName = "ProgressBar Circular";
ProgressBarCircular.args = {
  percentage: 74,
  secondaryPercentage: 90,
  isCircular: true,
};

const TemplateWithSU2C: Story<ProgressBarProps> = (args) => (
  <ThemeProvider theme={su2cTheme}>
    <GlobalStyle />
    <ProgressBar {...args} />
  </ThemeProvider>
);

export const SU2CProgressBar: Story<ProgressBarProps> = TemplateWithSU2C.bind(
  {}
);
SU2CProgressBar.storyName = "SU2C ProgressBar";
SU2CProgressBar.args = {
  percentage: 74,
  secondaryPercentage: 90,
};

export const SU2CProgressBarCircular: Story<ProgressBarProps> =
  TemplateWithSU2C.bind({});
SU2CProgressBarCircular.storyName = "SU2C ProgressBar Circular";
SU2CProgressBarCircular.args = {
  percentage: 74,
  secondaryPercentage: 90,
  isCircular: true,
};
