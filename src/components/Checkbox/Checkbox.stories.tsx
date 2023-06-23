import React from "react";
import { StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { su2cTheme, Box, bowelbabeTheme } from "..";
import CheckBox, { CheckBoxProps } from ".";

export default {
  title: "CheckBox",
  component: CheckBox,
  args: {
    id: "check",
    disabled: false,
    value: "one",
    hasError: false,
    errorMessage: "",
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof CheckBox>;

const FullComponentWithCheckboxes = (args: CheckBoxProps) => {
  const [selected, setSelected] = React.useState<Array<string>>([]);
  const handleChange = (value: string) => {
    if (selected.indexOf(value) === -1) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter((item) => item !== value));
    }
  };

  return (
    <fieldset style={{ border: "none" }}>
      <CheckBox
        onChange={(e) => handleChange(e.target.value)}
        checked={selected.indexOf("one") >= 0}
        {...args}
      />
      <Box marginTop="s">
        <CheckBox
          onChange={(e) => handleChange(e.target.value)}
          checked={selected.indexOf("two") >= 0}
          value="two"
        />
      </Box>
    </fieldset>
  );
};

export const Default: Story = {
  name: "Default",
  args: {},
  render: FullComponentWithCheckboxes,
};

export const CheckboxDefaultError: Story = {
  name: "CheckboxDefaultError",
  args: {
    hasError: true,
    errorMessage: "Error Message",
  },
  render: FullComponentWithCheckboxes,
};

/// SU2C

const su2cRender = (args: CheckBoxProps) => (
  <ThemeProvider theme={su2cTheme}>
    <FullComponentWithCheckboxes {...args} />
  </ThemeProvider>
);

export const CheckBoxSU2C: Story = {
  name: "CheckBoxSU2C",
  args: {},
  render: su2cRender,
};

/// Bowelbabe

const bowelbabeRender = (args: CheckBoxProps) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <FullComponentWithCheckboxes {...args} />
  </ThemeProvider>
);

export const CheckBoxBowelbabe: Story = {
  name: "CheckBoxBowelbabe",
  args: {},
  render: bowelbabeRender,
};
