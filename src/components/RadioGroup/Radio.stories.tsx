import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { su2cTheme } from '..';
import RadioGroup, { RadioGroupProps } from '.';

export default {
  title: 'RadioGroup',
  component: RadioGroup,
} as Meta<RadioGroupProps>;

const Template: Story<RadioGroupProps> = args => (
  <fieldset style={{ border: 'none' }}>
    <RadioGroup
      {...args}
      legend="Email"
      name="email"
      attributes={[
        { option: 'Yes', value: 'yes' },
        { option: 'No', value: 'no' },
      ]}
      selectedValue={'yes'}
    />

    <RadioGroup
      legend="Telephone"
      name="phone"
      attributes={[
        { option: 'Yes', value: 'yes' },
        { option: 'No', value: 'no' },
      ]}
      selectedValue={'no'}
    />
  </fieldset>
);

export const RadioDefault: Story<RadioGroupProps> = Template.bind({});
RadioDefault.storyName = 'RadioGroup';
RadioDefault.args = {};

const TemplateWithSU2C: Story<RadioGroupProps> = args => (
  <ThemeProvider theme={su2cTheme}>
    <fieldset style={{ border: 'none' }}>
      <RadioGroup
        {...args}
        legend="Email"
        name="email"
        attributes={[
          { option: 'Yes', value: 'yes' },
          { option: 'No', value: 'no' },
        ]}
        selectedValue={'yes'}
      />

      <RadioGroup
        legend="Telephone"
        name="phone"
        attributes={[
          { option: 'Yes', value: 'yes' },
          { option: 'No', value: 'no' },
        ]}
        selectedValue={'no'}
      />
    </fieldset>
  </ThemeProvider>
);

export const SU2CRadio: Story<RadioGroupProps> = TemplateWithSU2C.bind({});
SU2CRadio.storyName = 'SU2C SU2CRadio';
SU2CRadio.args = {};
