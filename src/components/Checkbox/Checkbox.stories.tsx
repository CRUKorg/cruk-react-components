import React from "react";
import { type StoryObj } from "@storybook/react-vite";

import { Box, type ThemeType } from "..";
import CheckBox, { type CheckBoxProps } from ".";
import AllThemesWrapper from "../AllThemesWrapper";
import { useTheme } from "styled-components";

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
  const [selected, setSelected] = React.useState<string[]>(["one"]);
  const theme = useTheme();
  const themeTyped = theme as ThemeType;
  const themeName = themeTyped.name;
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
        name={`checkbox1-${themeName}`}
        onChange={(e) => handleChange(e.target.value)}
        checked={selected.indexOf("one") >= 0}
        {...args}
      />
      <Box marginTop="s">
        <CheckBox
          name={`checkbox1-${themeName}`}
          onChange={(e) => handleChange(e.target.value)}
          checked={selected.indexOf("two") >= 0}
          value="two"
        />
      </Box>
    </fieldset>
  );
};

export const Default: Story = {
  args: {},
  render: (args) => (
    <AllThemesWrapper>
      <FullComponentWithCheckboxes {...args} />
    </AllThemesWrapper>
  ),
};

export const CheckboxDefaultError: Story = {
  name: "CheckboxDefaultError",
  args: {
    hasError: true,
    errorMessage: "Error Message",
  },
  render: (args) => (
    <AllThemesWrapper>
      <FullComponentWithCheckboxes {...args} />
    </AllThemesWrapper>
  ),
};
