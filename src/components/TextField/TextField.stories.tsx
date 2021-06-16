import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { su2cTheme } from '..';
import TextField, { TextFieldProps } from '.';

export default {
  title: 'TextField',
  component: TextField,
} as Meta<TextFieldProps>;

const Template: Story<TextFieldProps> = args => <TextField {...args} />;

export const TextFieldDefault: Story<TextFieldProps> = Template.bind({});
TextFieldDefault.storyName = 'TextField';
TextFieldDefault.args = {
  value: undefined,
  disabled: false,
  label: 'TextField',
  required: false,
};

export const TextFieldWithError: Story<TextFieldProps> = Template.bind({});
TextFieldWithError.storyName = 'TextField With Error';
TextFieldWithError.args = {
  value: undefined,
  disabled: false,
  label: 'TextField',
  hasError: true,
  errorMessage: 'error message',
  required: false,
};

const TemplateWithSU2C: Story<TextFieldProps> = args => (
  <ThemeProvider theme={su2cTheme}>
    <TextField {...args} />
  </ThemeProvider>
);

export const SU2CTextField: Story<TextFieldProps> = TemplateWithSU2C.bind({});
SU2CTextField.storyName = 'SU2C TextField';
SU2CTextField.args = {
  value: undefined,
  disabled: false,
  label: 'TextField',
  required: false,
};

export const SU2CTextFieldWithError: Story<TextFieldProps> = TemplateWithSU2C.bind({});
SU2CTextFieldWithError.storyName = 'SU2C TextField With Error';
SU2CTextFieldWithError.args = {
  value: undefined,
  disabled: false,
  label: 'TextField',
  hasError: true,
  errorMessage: 'error message',
  required: false,
};
