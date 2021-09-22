import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Story, Meta } from '@storybook/react';

import { GlobalStyle, su2cTheme } from '..';
import Text, { TextProps } from '.';

export default {
  title: 'Text',
  component: Text,
} as Meta<TextProps>;

const Template: Story = args => <Text {...args} />;

export const TextDefault: Story = Template.bind({});
TextDefault.storyName = 'Text';
TextDefault.args = {
  children: 'This is text it defaults to a paragraph tag',
  textColor: 'textDark',
};

const TemplateWithSU2C: Story = args => (
  <ThemeProvider theme={su2cTheme}>
    <GlobalStyle />
    <Text {...args} />
  </ThemeProvider>
);

export const SU2CText: Story = TemplateWithSU2C.bind({});
SU2CText.storyName = 'SU2C Text';
SU2CText.args = {
  children: 'This is text it defaults to a paragraph tag',
  textColor: 'textDark',
};
