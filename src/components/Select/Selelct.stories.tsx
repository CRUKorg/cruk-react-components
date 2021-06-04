import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { su2cTheme } from '..';
import Select, { SelectProps } from '.';

export default {
  title: 'Select',
  component: Select,
} as Meta<SelectProps>;

const Template: Story<SelectProps> = args => (
  <Select {...args}>
    <option disabled value="">
      --Please choose an option--
    </option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
  </Select>
);

export const SelectWithLabel: Story<SelectProps> = Template.bind({});
SelectWithLabel.args = {
  value: '',
  label: 'Disabled option',
  disabled: false,
};

export const SelectWithError: Story<SelectProps> = Template.bind({});
SelectWithError.args = {
  value: '',
  label: 'Disabled option',
  hasError: true,
  errorMessage: 'error message',
  disabled: false,
};

const TemplateWithSU2C: Story<SelectProps> = args => (
  <ThemeProvider theme={su2cTheme}>
    <Select {...args} />
  </ThemeProvider>
);

export const SU2CSelectWithLabel: Story<SelectProps> = TemplateWithSU2C.bind({});
SU2CSelectWithLabel.storyName = 'SU2C Select With Label';
SU2CSelectWithLabel.args = {
  value: '',
  label: 'Disabled option',
  disabled: false,
};

export const SU2CSelectWithError: Story<SelectProps> = Template.bind({});
SU2CSelectWithError.storyName = 'SU2C Select With Error';
SU2CSelectWithError.args = {
  value: '',
  label: 'Disabled option',
  hasError: true,
  errorMessage: 'error message',
  disabled: false,
};
