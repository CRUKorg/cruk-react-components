import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, su2cTheme } from '..';
import ErrorText, { ErrorTextProps } from '.';

export default {
  title: 'ErrorText',
  component: ErrorText,
} as Meta<ErrorTextProps>;

const Template: Story = args => <ErrorText {...args} />;

export const ErrorTextDefault: Story = Template.bind({});
ErrorTextDefault.storyName = 'ErrorText';
ErrorTextDefault.args = {
  children: 'this is error text',
};

const TemplateWithSU2C: Story = args => (
  <ThemeProvider theme={su2cTheme}>
    <GlobalStyle />
    <ErrorText {...args} />
  </ThemeProvider>
);

export const SU2CErrorText: Story = TemplateWithSU2C.bind({});
SU2CErrorText.storyName = 'SU2C ErrorText';
SU2CErrorText.args = {
  children: 'this is error text',
};
