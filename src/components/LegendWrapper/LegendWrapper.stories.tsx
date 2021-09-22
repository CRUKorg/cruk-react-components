import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { su2cTheme } from '..';
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
      <Radio onChange={e => handleChange(e.target.value)} checked={selected === 'one'} name="example1" value="one">
        Option one
      </Radio>

      <Radio onChange={e => handleChange(e.target.value)} checked={selected === 'two'} name="example1" value="two">
        Option two
      </Radio>
    </LegendWrapper>
  );
};

const TemplateLegendErrorWithRadio: Story<LegendWrapperProps> = args => {
  const [selected, setSelected] = useState('one');
  const handleChange = (value: string) => {
    setSelected(value);
  };
  return (
    <LegendWrapper {...args}>
      <Radio
        onChange={e => handleChange(e.target.value)}
        checked={selected === 'one'}
        hasError={true}
        name="example1"
        value="one"
      >
        Option one
      </Radio>

      <Radio
        onChange={e => handleChange(e.target.value)}
        checked={selected === 'two'}
        hasError={true}
        name="example1"
        value="two"
      >
        Option two
      </Radio>
    </LegendWrapper>
  );
};

export const LegendWrapperRadio: Story<LegendWrapperProps> = TemplateWithRadio.bind({});
LegendWrapperRadio.storyName = 'LegendWrapper with Radio Button';
LegendWrapperRadio.args = {
  legendText: 'Legend Example',
  hintText: 'This is hint text',
};

export const LegendWrapperRadioError: Story<LegendWrapperProps> = TemplateLegendErrorWithRadio.bind({});
LegendWrapperRadioError.storyName = 'LegendWrapper with Error and Radio Buttons';
LegendWrapperRadioError.args = {
  legendText: 'Legend Example',
  hintText: 'This is hint text',
  hasError: true,
  errorMessage: 'Error message',
};

const TemplateWithCheckbox: Story<LegendWrapperProps> = args => {
  const [selected, setSelected] = React.useState<Array<string>>([]);
  const handleChange = (value: string) => {
    if (selected.indexOf(value) === -1) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter(item => item !== value));
    }
  };
  return (
    <LegendWrapper {...args}>
      <CheckBox
        onChange={e => handleChange(e.target.value)}
        checked={selected.indexOf('one') >= 0}
        disabled={false}
        value="one"
      />

      <CheckBox
        onChange={e => handleChange(e.target.value)}
        checked={selected.indexOf('two') >= 0}
        disabled={false}
        value="two"
      />
    </LegendWrapper>
  );
};

const TemplateWithErrorAndCheckbox: Story<LegendWrapperProps> = args => {
  const [selected, setSelected] = React.useState<Array<string>>([]);
  const handleChange = (value: string) => {
    if (selected.indexOf(value) === -1) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter(item => item !== value));
    }
  };
  return (
    <LegendWrapper {...args}>
      <CheckBox
        onChange={e => handleChange(e.target.value)}
        checked={selected.indexOf('one') >= 0}
        disabled={false}
        value="one"
        hasError={true}
      />
      <CheckBox
        onChange={e => handleChange(e.target.value)}
        checked={selected.indexOf('two') >= 0}
        disabled={false}
        value="two"
        hasError={true}
      />
    </LegendWrapper>
  );
};

export const LegendWrapperCheckbox: Story<LegendWrapperProps> = TemplateWithCheckbox.bind({});
LegendWrapperCheckbox.storyName = 'LegendWrapper with Checkbox';
LegendWrapperCheckbox.args = {
  legendText: 'Legend Example',
  hintText: 'This is hint text',
};

export const LegendWrapperErrorWithCheckbox: Story<LegendWrapperProps> = TemplateWithErrorAndCheckbox.bind({});
LegendWrapperErrorWithCheckbox.storyName = 'LegendWrapper Error with Checkbox';
LegendWrapperErrorWithCheckbox.args = {
  legendText: 'Legend Example',
  hintText: 'This is hint text',
  hasError: true,
  errorMessage: 'Error message',
};

const TemplateWithSU2C: Story<LegendWrapperProps> = args => {
  const [selected, setSelected] = useState('one');
  const handleChange = (value: string) => {
    setSelected(value);
  };
  return (
    <ThemeProvider theme={su2cTheme}>
      <LegendWrapper {...args}>
        <Radio
          onChange={e => handleChange(e.target.value)}
          checked={selected === 'one'}
          hasError={true}
          name="example2One"
          value="one"
        >
          Option one
        </Radio>
        <Radio
          onChange={e => handleChange(e.target.value)}
          checked={selected === 'two'}
          hasError={true}
          name="example2Two"
          value="two"
        >
          Option two
        </Radio>
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
