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

export const CheckboxDefault: Story = Template.bind({});
CheckboxDefault.storyName = 'CheckBox';
CheckboxDefault.args = {
  value: 'value',
};

const TemplateWithSU2C: Story = args => (
  <ThemeProvider theme={su2cTheme}>
    <CheckBox {...args} />
  </ThemeProvider>
);

export const SU2CCheckbox: Story = TemplateWithSU2C.bind({});
SU2CCheckbox.storyName = 'SU2C CheckBox';
SU2CCheckbox.args = {
  value: 'value',
};
