import React, { useState } from "react";
import { type StoryObj } from "@storybook/react-vite";
import { useTheme } from "styled-components";

import { Box, type ThemeType } from "..";
import Radio, { type RadioProps } from ".";
import AllThemesWrapper from "../AllThemesWrapper";

const FullComponentWithRadios = (args: RadioProps) => {
  const [selected, setSelected] = useState("one");
  const handleChange = (targetValue: string) => {
    setSelected(targetValue);
  };
  const theme = useTheme();
  const themeTyped = theme as ThemeType;
  const themeName = themeTyped.name;

  const hasError = !!args.hasError;

  return (
    <fieldset style={{ border: "none" }}>
      <Radio
        name={`raidio1-${hasError ? "error" : "no-error"}-${themeName}`}
        onChange={(e) => handleChange(e.target.value)}
        checked={selected === "one"}
        {...args}
      >
        Option one
      </Radio>
      <Box marginTop="s">
        <Radio
          name={`raidio1-${hasError ? "error" : "no-error"}-${themeName}`}
          onChange={(e) => handleChange(e.target.value)}
          checked={selected === "two"}
          value="two"
        >
          Option two
        </Radio>
      </Box>
    </fieldset>
  );
};

export default {
  title: "Radio",
  component: Radio,
  args: {
    id: "radio",
    value: "one",
    disabled: false,
    hasError: false,
    errorMessage: "",
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <AllThemesWrapper>
      <FullComponentWithRadios {...args} />
    </AllThemesWrapper>
  ),
};

export const RadioWithError: Story = {
  name: "RadioWithError",
  args: {
    hasError: true,
    errorMessage: "Error Message",
  },
  render: (args) => (
    <AllThemesWrapper>
      <FullComponentWithRadios {...args} />
    </AllThemesWrapper>
  ),
};
