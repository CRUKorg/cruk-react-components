import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { su2cTheme } from '..';
import RadioGroup, { RadioGroupProps } from '.';

export default {
  title: 'RadioGroup',
  component: RadioGroup,
} as Meta<RadioGroupProps>;

const Template: Story<RadioGroupProps> = args => {
  const [selectedEmail, setSelectedEmail] = React.useState('yes');
  return (
    <fieldset style={{ border: 'none' }}>
      <RadioGroup
        {...args}
        legend="Email"
        name="email"
        onChange={e => setSelectedEmail(e.target.value)}
        attributes={[
          { option: 'Yes', value: 'yes' },
          { option: 'No', value: 'no' },
        ]}
        selectedValue={selectedEmail}
      />
    </fieldset>
  );
};

export const RadioDefault: Story<RadioGroupProps> = Template.bind({});
RadioDefault.storyName = 'RadioGroup';
RadioDefault.args = {};

const TemplateWithSU2C: Story<RadioGroupProps> = args => {
  const [selectedEmail, setSelectedEmail] = React.useState('yes');

  return (
    <ThemeProvider theme={su2cTheme}>
      <fieldset style={{ border: 'none' }}>
        <RadioGroup
          {...args}
          legend="Email"
          name="email"
          onChange={e => setSelectedEmail(e.target.value)}
          attributes={[
            { option: 'Yes', value: 'yes' },
            { option: 'No', value: 'no' },
          ]}
          selectedValue={selectedEmail}
        />
      </fieldset>
    </ThemeProvider>
  );
};

export const SU2CRadio: Story<RadioGroupProps> = TemplateWithSU2C.bind({});
SU2CRadio.storyName = 'SU2C SU2CRadio';
SU2CRadio.args = {};
