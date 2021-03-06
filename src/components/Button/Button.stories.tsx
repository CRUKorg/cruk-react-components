import React from 'react';
import { Story, Meta } from '@storybook/react';
import Icon from 'src/components/Icon';
import Button, { Props } from './';
import { su2cTheme } from '..';
import { ThemeProvider } from 'styled-components';

export default {
  title: 'Button',
  component: Button,
} as Meta<Props>;

const Template: Story = args => <Button {...args} />;

export const Primary: Story = Template.bind({});
Primary.args = {
  appearance: 'primary',
  disabled: false,
  children: 'A button',
  full: false,
  size: 'm',
};

export const Secondary: Story = Template.bind({});
Secondary.args = {
  appearance: 'secondary',
  disabled: false,
  children: 'A button',
  full: false,
  size: 'm',
};

export const Tertiary: Story = Template.bind({});
Tertiary.args = {
  appearance: 'tertiary',
  disabled: false,
  children: 'A button',
  full: false,
  size: 'm',
};

const TemplateWithIcon: Story = args => (
  <Button {...args}>
    <Icon name="clock" />A button
    <Icon name="clock" />
  </Button>
);

export const WithIcons: Story = TemplateWithIcon.bind({});
WithIcons.args = {
  appearance: 'primary',
  disabled: false,
  full: false,
  size: 'm',
  theme: su2cTheme,
};

const TemplateWithSU2C: Story = args => (
  <ThemeProvider theme={su2cTheme}>
    <Button {...args}>A button</Button>
  </ThemeProvider>
);

export const SU2CPrimary: Story = TemplateWithSU2C.bind({});
SU2CPrimary.storyName = 'SU2C Primary';
SU2CPrimary.args = {
  appearance: 'primary',
  disabled: false,
  children: 'A button',
  full: false,
  size: 'm',
};

export const SU2CSecondary: Story = TemplateWithSU2C.bind({});
SU2CSecondary.storyName = 'SU2C Secondary';
SU2CSecondary.args = {
  appearance: 'secondary',
  disabled: false,
  children: 'A button',
  full: false,
  size: 'm',
};

export const SU2CTertiary: Story = TemplateWithSU2C.bind({});
SU2CTertiary.storyName = 'SU2C Tertiary';
SU2CTertiary.args = {
  appearance: 'tertiary',
  disabled: false,
  children: 'A button',
  full: false,
  size: 'm',
};
