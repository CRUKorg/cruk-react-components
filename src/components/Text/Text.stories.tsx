import React from 'react';
import { Story, Meta } from '@storybook/react';
import Text, { TextProps } from '.';

export default {
  title: 'Text',
  component: Text,
} as Meta<TextProps>;

const Template: Story = args => <Text {...args} />;

export const DefaultParagraph: Story = Template.bind({});
DefaultParagraph.args = {
  children: 'This is text it defaults to a paragraph tag',
  textColor: 'textDark',
};

export const Span: Story = Template.bind({});
Span.args = {
  as: 'span',
  children: 'his is text as a span tag',
};

export const TextColor: Story = Template.bind({});
TextColor.args = {
  textColor: 'primary',
  children: 'Color is Primary',
};

export const TextSize: Story = Template.bind({});
TextSize.args = {
  textSize: 'l',
  children: 'Size is large',
};
