import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { su2cTheme, Box } from '..';
import CheckBox, { CheckBoxProps } from '.';

export default {
  title: 'CheckBox',
  component: CheckBox,
} as Meta<CheckBoxProps>;

const Template: Story = args => {
  const [selected, setSelected] = React.useState<Array<string>>([]);
  const handleChange = (value: string) => {
    if (selected.indexOf(value) === -1) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter(item => item !== value));
    }
  };
  return (
    <>
      <CheckBox onChange={e => handleChange(e.target.value)} checked={selected.indexOf('one') >= 0} {...args} />
      <Box paddingTop="xs">
        <CheckBox onChange={e => handleChange(e.target.value)} checked={selected.indexOf('two') >= 0} value="two" />
      </Box>
    </>
  );
};

export const CheckboxDefault: Story = Template.bind({});
CheckboxDefault.storyName = 'CheckBox';
CheckboxDefault.args = {
  disabled: false,
  value: 'one',
};
const TemplateError: Story = args => {
  const [selected, setSelected] = React.useState<Array<string>>([]);
  const handleChange = (value: string) => {
    if (selected.indexOf(value) === -1) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter(item => item !== value));
    }
  };
  return (
    <>
      <CheckBox onChange={e => handleChange(e.target.value)} checked={selected.indexOf('one') >= 0} {...args} />
      <Box paddingTop="xs">
        <CheckBox
          onChange={e => handleChange(e.target.value)}
          checked={selected.indexOf('two') >= 0}
          value="two"
          hasError={true}
          errorMessage="Error Message"
        />
      </Box>
    </>
  );
};

export const CheckboxDefaultError: Story = TemplateError.bind({});
CheckboxDefaultError.storyName = 'CheckBox Error';
CheckboxDefaultError.args = {
  value: 'one',
  disabled: false,
  hasError: true,
  errorMessage: 'Error Message',
};

const TemplateWithSU2C: Story = args => {
  const [selected, setSelected] = React.useState<Array<string>>([]);
  const handleChange = (value: string) => {
    if (selected.indexOf(value) === -1) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter(item => item !== value));
    }
  };
  return (
    <ThemeProvider theme={su2cTheme}>
      <CheckBox onChange={e => handleChange(e.target.value)} checked={selected.indexOf('one') >= 0} {...args} />
    </ThemeProvider>
  );
};

export const SU2CCheckbox: Story = TemplateWithSU2C.bind({});
SU2CCheckbox.storyName = 'SU2C CheckBox';
SU2CCheckbox.args = {
  value: 'one',
  disabled: false,
};
