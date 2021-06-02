import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { su2cTheme, Box } from '..';
import Radio, { RadioProps } from '.';

export default {
  title: 'Radio',
  component: Radio,
} as Meta<RadioProps>;

const Template: Story<RadioProps> = args => (
  <fieldset style={{ border: 'none' }}>
    <Box>
      <Radio name="example1" value="one" {...args}>
        Option one
      </Radio>
    </Box>
    <Box>
      <Radio name="example1" value="two">
        Option two
      </Radio>
    </Box>
  </fieldset>
);

export const RadioDefault: Story<RadioProps> = Template.bind({});
RadioDefault.storyName = 'Radio';
RadioDefault.args = {
  value: 'value',
  disabled: false,
};

const TemplateWithSU2C: Story<RadioProps> = args => (
  <ThemeProvider theme={su2cTheme}>
    <fieldset style={{ border: 'none' }}>
      <Box>
        <Radio name="example1" value="one" {...args}>
          Option one
        </Radio>
      </Box>
      <Box>
        <Radio name="example1" value="two">
          Option two
        </Radio>
      </Box>
    </fieldset>
  </ThemeProvider>
);

export const SU2CRadio: Story<RadioProps> = TemplateWithSU2C.bind({});
SU2CRadio.storyName = 'SU2C SU2CRadio';
SU2CRadio.args = {
  value: 'value',
  disabled: false,
};
