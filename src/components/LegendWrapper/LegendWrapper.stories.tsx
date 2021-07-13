import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { su2cTheme, Box } from '..';
import Radio from '../Radio';
import CheckBox from '../Checkbox';

import LegendWrapper, { LegendWrapperProps } from '.';

export default {
  title: 'Legend Wrapper',
  component: LegendWrapper,
} as Meta<LegendWrapperProps>;

const Template: Story<LegendWrapperProps> = args => <LegendWrapper {...args} />;

export const LegendWrapperDefault: Story<LegendWrapperProps> = Template.bind({});
LegendWrapperDefault.storyName = 'LegendWrapper';
LegendWrapperDefault.args = {
  legendText: 'Legend Example',
  hintText: 'This is hint text',
};

const TemplateWithRadio: Story<LegendWrapperProps> = args => {
  const [selected, setSelected] = useState('one');
  const handleChange = (value: string) => {
    setSelected(value);
  };
  return (
    <LegendWrapper {...args}>
      <Box>
        <Radio onChange={e => handleChange(e.target.value)} checked={selected === 'one'} name="example1" value="one">
          Option one
        </Radio>
      </Box>
      <Box marginBottom="none">
        <Radio onChange={e => handleChange(e.target.value)} checked={selected === 'two'} name="example1" value="two">
          Option two
        </Radio>
      </Box>
    </LegendWrapper>
  );
};

export const LegendWrapperRadio: Story<LegendWrapperProps> = TemplateWithRadio.bind({});
LegendWrapperRadio.storyName = 'LegendWrapper with Radio Button';
LegendWrapperRadio.args = {
  legendText: 'Legend Example',
  hintText: 'This is hint text',
};

export const LegendWrapperRadioError: Story<LegendWrapperProps> = TemplateWithRadio.bind({});
LegendWrapperRadioError.storyName = 'LegendWrapper with Error and Radio Button';
LegendWrapperRadioError.args = {
  legendText: 'Legend Example',
  hasError: true,
  errorMessage: 'Error message',
  hintText: 'This is hint text',
};

const TemplateWithCheckbox: Story<LegendWrapperProps> = args => (
  <LegendWrapper {...args}>
    <Box>
      <CheckBox disabled={false} value="value" />
    </Box>
    <Box marginBottom="none">
      <CheckBox disabled={false} value="value" />
    </Box>
  </LegendWrapper>
);

export const LegendWrapperCheckbox: Story<LegendWrapperProps> = TemplateWithCheckbox.bind({});
LegendWrapperCheckbox.storyName = 'LegendWrapper with Checkbox';
LegendWrapperCheckbox.args = {
  legendText: 'Legend Example',
  hintText: 'This is hint text',
};

export const LegendWrapperCheckboxError: Story<LegendWrapperProps> = TemplateWithCheckbox.bind({});
LegendWrapperCheckboxError.storyName = 'LegendWrapper with Error and Checkbox';
LegendWrapperCheckboxError.args = {
  legendText: 'Legend Example',
  hasError: true,
  errorMessage: 'Error message',
  hintText: 'This is hint text',
};

const TemplateWithSU2C: Story<LegendWrapperProps> = args => {
  const [selected, setSelected] = useState('one');
  const handleChange = (value: string) => {
    setSelected(value);
  };
  return (
    <ThemeProvider theme={su2cTheme}>
      <LegendWrapper {...args}>
        <Box>
          <Radio
            onChange={e => handleChange(e.target.value)}
            checked={selected === 'one'}
            name="example2One"
            value="one"
          >
            Option one
          </Radio>
        </Box>
        <Box marginBottom="none">
          <Radio
            onChange={e => handleChange(e.target.value)}
            checked={selected === 'two'}
            name="example2Two"
            value="two"
          >
            Option two
          </Radio>
        </Box>
      </LegendWrapper>
    </ThemeProvider>
  );
};

export const SU2CLegendWrapperRadioError: Story<LegendWrapperProps> = TemplateWithSU2C.bind({});
SU2CLegendWrapperRadioError.storyName = 'SU2C LegendWrapper with Error and Radio Button';
SU2CLegendWrapperRadioError.args = {
  legendText: 'Legend Example',
  hasError: true,
  errorMessage: 'Error message',
  hintText: 'This is hint text',
};
