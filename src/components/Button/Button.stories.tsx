import React from 'react';
import { Story, Meta } from '@storybook/react';
import Icon from 'src/components/Icon';
import Button, { Props } from './';

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
    {' '}
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
};
