import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, su2cTheme } from '..';
import RadioConsent, { RadioConsentProps } from '.';

export default {
  title: 'RadioConsent (experiemental)',
  component: RadioConsent,
} as Meta<RadioConsentProps>;

const Template: Story<RadioConsentProps> = args => {
  const [selectedEmail, setSelectedEmail] = React.useState('yes');
  return (
    <fieldset style={{ border: 'none' }}>
      <RadioConsent
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

export const RadioDefault: Story<RadioConsentProps> = Template.bind({});
RadioDefault.storyName = 'RadioConsent';
RadioDefault.args = {};

const TemplateWithSU2C: Story<RadioConsentProps> = args => {
  const [selectedEmail, setSelectedEmail] = React.useState('yes');

  return (
    <ThemeProvider theme={su2cTheme}>
      <GlobalStyle />
      <fieldset style={{ border: 'none' }}>
        <RadioConsent
          {...args}
          legend="Telephone"
          name="telephone"
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

export const SU2CRadio: Story<RadioConsentProps> = TemplateWithSU2C.bind({});
SU2CRadio.storyName = 'SU2C RadioConsent';
SU2CRadio.args = {};
