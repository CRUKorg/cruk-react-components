import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { su2cTheme } from '..';
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
  label: 'TextAreaField',
  resize: 'horizontal',
  lineCount: 5,
};

export const TextAreaFieldWithError: Story<TextAreaFieldProps> = Template.bind({});
TextAreaFieldWithError.storyName = 'TextAreaField With Error';
TextAreaFieldWithError.args = {
  value: undefined,
  disabled: false,
  label: 'TextAreaField',
  hasError: true,
  errorMessage: 'error message',
  resize: 'horizontal',
  lineCount: 5,
};

const TemplateWithSU2C: Story<TextAreaFieldProps> = args => (
  <ThemeProvider theme={su2cTheme}>
    <TextAreaField {...args} />
  </ThemeProvider>
);

export const SU2CTextAreaField: Story<TextAreaFieldProps> = TemplateWithSU2C.bind({});
SU2CTextAreaField.storyName = 'SU2C TextAreaField';
SU2CTextAreaField.args = {
  value: undefined,
  disabled: false,
  label: 'TextAreaField',
  resize: 'horizontal',
  lineCount: 5,
};

export const SU2CTextAreaFieldWithError: Story<TextAreaFieldProps> = TemplateWithSU2C.bind({});
SU2CTextAreaFieldWithError.storyName = 'SU2C TextAreaField With Error';
SU2CTextAreaFieldWithError.args = {
  value: undefined,
  disabled: false,
  label: 'TextAreaField',
  hasError: true,
  errorMessage: 'error message',
  resize: 'horizontal',
  lineCount: 5,
};
