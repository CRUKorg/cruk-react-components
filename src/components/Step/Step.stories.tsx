import React from "react";
import { Story, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, su2cTheme } from "..";
import Step, { StepProps } from ".";

export default {
  title: "Step (experimental)",
  component: Step,
} as Meta<StepProps>;

const Template: Story<StepProps> = (args) => <Step {...args} />;

export const StepsDefault: Story<StepProps> = Template.bind({});
StepsDefault.storyName = "Step";
StepsDefault.args = {
  current: 3,
  steps: ["Account", "Details", "Activity", "Motivation", "Page"],
};

const TemplateWithSU2C: Story<StepProps> = (args) => (
  <ThemeProvider theme={su2cTheme}>
    <GlobalStyle />
    <Step {...args} />
  </ThemeProvider>
);

export const SU2CStep: Story<StepProps> = TemplateWithSU2C.bind({});
SU2CStep.storyName = "SU2C Step";
SU2CStep.args = {
  current: 3,
  steps: ["Account", "Details", "Activity", "Motivation", "Page"],
};
