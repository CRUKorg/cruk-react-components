import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { su2cTheme } from '..';
import CheckBox, { CheckBoxProps } from '.';

export default {
  title: 'CheckBox',
  component: CheckBox,
} as Meta<CheckBoxProps>;

const Template: Story = args => <CheckBox {...args} />;

export const Checkbox: Story = Template.bind({});
Checkbox.args = {
  value: 'value',
};

const TemplateWithSU2C: Story = args => (
  <ThemeProvider theme={su2cTheme}>
    <CheckBox {...args} />
  </ThemeProvider>
);

export const SU2Checkbox: Story = TemplateWithSU2C.bind({});
SU2Checkbox.storyName = 'SU2C CheckBox';
SU2Checkbox.args = {
  value: 'value',
};
