import React from 'react';
import { Story, Meta } from '@storybook/react';
import Heading, { HeadingProps } from '.';

export default {
  title: 'Heading',
  component: Heading,
} as Meta<HeadingProps>;

const Template: Story = args => <Heading {...args} />;

export const DefaultHeading: Story = Template.bind({});
DefaultHeading.args = {
  children: 'H2 is the default',
  textColor: 'textDark',
};

export const HeadingSize: Story = Template.bind({});
HeadingSize.args = {
  textSize: 'xxxxl',
  children: 'This is H2 with H1 size',
};

export const H1: Story = Template.bind({});
H1.args = {
  h1: true,
  children: 'This is H1',
};

export const H2: Story = Template.bind({});
H2.args = {
  h2: true,
  children: 'This is H2',
};

export const H3: Story = Template.bind({});
H3.args = {
  h3: true,
  children: 'This is H3',
};

export const H4: Story = Template.bind({});
H4.args = {
  h4: true,
  children: 'This is H4',
};

export const H5: Story = Template.bind({});
H5.args = {
  h5: true,
  children: 'This is H5',
};

export const H6: Story = Template.bind({});
H6.args = {
  h6: true,
  children: 'This is H6',
};

export const HeadingAligned: Story = Template.bind({});
HeadingAligned.args = {
  textAlign: 'center',
  children: 'This is center aligned',
};
