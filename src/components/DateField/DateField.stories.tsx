import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { su2cTheme } from '..';
import DateField, { DateFieldProps } from '.';

export default {
  title: 'DateField',
  component: DateField,
} as Meta<DateFieldProps>;

const Template: Story<DateFieldProps> = args => <DateField {...args} />;

export const DateFieldWithLabel: Story<DateFieldProps> = Template.bind({});
DateFieldWithLabel.args = {
  dayName: 'birthDay',
  monthName: 'birthMonth',
  yearName: 'birthYear',
  label: 'When were they born?',
  hintText: 'for example: 24 11 1988',
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  disabled: false,
};

export const DateFieldWithError: Story<DateFieldProps> = Template.bind({});
DateFieldWithError.args = {
  label: 'Date with all fields with errors',
  hintText: 'for example: 24 11 1988',
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  dayHasError: true,
  monthHasError: true,
  yearHasError: true,
  errorMessage: 'Day month and year invalid',
  disabled: false,
};

const TemplateWithSU2C: Story<DateFieldProps> = args => (
  <ThemeProvider theme={su2cTheme}>
    <DateField {...args} />
  </ThemeProvider>
);

export const SU2CDateFieldWithLabel: Story<DateFieldProps> = TemplateWithSU2C.bind({});
SU2CDateFieldWithLabel.storyName = 'SU2C DateField With Label';
SU2CDateFieldWithLabel.args = {
  dayName: 'birthDay',
  monthName: 'birthMonth',
  yearName: 'birthYear',
  label: 'When were they born?',
  hintText: 'for example: 24 11 1988',
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  disabled: false,
};

export const SU2CDateFieldWithError: Story<DateFieldProps> = TemplateWithSU2C.bind({});
SU2CDateFieldWithError.storyName = 'SU2C DateField With Error';
SU2CDateFieldWithError.args = {
  label: 'Date with all fields with errors',
  hintText: 'for example: 24 11 1988',
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  dayHasError: true,
  monthHasError: true,
  yearHasError: true,
  errorMessage: 'Day month and year invalid',
  disabled: false,
};
