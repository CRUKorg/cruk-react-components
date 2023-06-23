import React, { useState } from "react";
import { StoryObj, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { su2cTheme, Box, bowelbabeTheme } from "..";
import Radio, { RadioProps } from ".";

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
} as Meta<RadioProps>;

type Story = StoryObj<typeof Radio>;

const FullComponentWithRadios = (args: RadioProps) => {
  const [selected, setSelected] = useState(args.value);
  const handleChange = (value: string) => {
    setSelected(value);
  };

  return (
    <fieldset style={{ border: "none" }}>
      <Radio
        onChange={(e) => handleChange(e.target.value)}
        checked={selected === "one"}
        {...args}
      >
        Option one
      </Radio>
      <Box marginTop="s">
        <Radio
          onChange={(e) => handleChange(e.target.value)}
          checked={selected === "two"}
          name="example2"
          value="two"
        >
          Option two
        </Radio>
      </Box>
    </fieldset>
  );
};

export const Default: Story = {
  name: "Default",
  args: {},
  render: FullComponentWithRadios,
};

export const RadioWithError: Story = {
  name: "RadioWithError",
  args: {
    hasError: true,
    errorMessage: "Error Message",
  },
  render: FullComponentWithRadios,
};

/// SU2C

const su2cRender = (args: RadioProps) => (
  <ThemeProvider theme={su2cTheme}>
    <FullComponentWithRadios {...args} />
  </ThemeProvider>
);

export const RadioSU2C: Story = {
  name: "RadioSU2C",
  args: {},
  render: su2cRender,
};

export const RadioErrorSU2C: Story = {
  name: "RadioSU2C",
  args: { hasError: true, errorMessage: "Error Message" },
  render: su2cRender,
};

/// Bowelbabe

const bowelbabeRender = (args: RadioProps) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <FullComponentWithRadios {...args} />
  </ThemeProvider>
);

export const RadioBowelbabe: Story = {
  name: "RadioBowelbabe",
  args: {},
  render: bowelbabeRender,
};

export const RadioErrorBowelbabe: Story = {
  name: "RadioErrorBowelbabe",
  args: { hasError: true, errorMessage: "Error Message" },
  render: bowelbabeRender,
};
