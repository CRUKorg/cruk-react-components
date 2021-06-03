import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { su2cTheme } from '..';
import Icon, { IconProps } from '.';

export default {
  title: 'Icon',
  component: Icon,
} as Meta<IconProps>;

const Template: Story<IconProps> = args => <Icon {...args} />;

export const CheckboxDefault: Story<IconProps> = Template.bind({});
CheckboxDefault.storyName = 'CheckBox';
CheckboxDefault.args = {
  name: 'comment',
};

const TemplateWithSU2C: Story<IconProps> = args => (
  <ThemeProvider theme={su2cTheme}>
    <Icon {...args} />
  </ThemeProvider>
);

export const SU2CCheckbox: Story<IconProps> = TemplateWithSU2C.bind({});
SU2CCheckbox.storyName = 'SU2C CheckBox';
SU2CCheckbox.args = {
  name: 'comment',
};
