import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, su2cTheme } from '..';
import TextAreaField, { TextAreaFieldProps } from '.';

export default {
  title: 'TextAreaField',
  component: TextAreaField,
} as Meta<TextAreaFieldProps>;

const Template: Story<TextAreaFieldProps> = args => <TextAreaField {...args} />;

export const TextAreaFieldDefault: Story<TextAreaFieldProps> = Template.bind({});
TextAreaFieldDefault.storyName = 'TextAreaField';
TextAreaFieldDefault.args = {
  value: undefined,
  disabled: false,
  required: false,
  label: 'TextAreaField',
  hintText: undefined,
  resize: 'horizontal',
  lineCount: 5,
  hasError: false,
  errorMessage: undefined,
};

export const TextAreaFieldWithError: Story<TextAreaFieldProps> = Template.bind({});
TextAreaFieldWithError.storyName = 'TextAreaField With Error';
TextAreaFieldWithError.args = {
  value: undefined,
  disabled: false,
  label: 'TextAreaField',
  hintText: undefined,
  resize: 'horizontal',
  lineCount: 5,
  required: false,
  hasError: true,
  errorMessage: 'error message',
};

const TemplateWithSU2C: Story<TextAreaFieldProps> = args => (
  <ThemeProvider theme={su2cTheme}>
    <GlobalStyle />
    <TextAreaField {...args} />
  </ThemeProvider>
);

export const SU2CTextAreaField: Story<TextAreaFieldProps> = TemplateWithSU2C.bind({});
SU2CTextAreaField.storyName = 'SU2C TextAreaField';
SU2CTextAreaField.args = {
  value: undefined,
  disabled: false,
  required: false,
  label: 'TextAreaField',
  hintText: undefined,
  resize: 'horizontal',
  lineCount: 5,
  hasError: false,
  errorMessage: undefined,
};

export const SU2CTextAreaFieldWithError: Story<TextAreaFieldProps> = TemplateWithSU2C.bind({});
SU2CTextAreaFieldWithError.storyName = 'SU2C TextAreaField With Error';
SU2CTextAreaFieldWithError.args = {
  value: undefined,
  disabled: false,
  required: false,
  label: 'TextAreaField',
  hintText: undefined,
  resize: 'horizontal',
  lineCount: 5,
  hasError: true,
  errorMessage: 'error message',
};
