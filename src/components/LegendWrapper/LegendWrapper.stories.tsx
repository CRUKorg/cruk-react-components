import React, { useState } from "react";
import { StoryObj, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { su2cTheme, bowelbabeTheme } from "..";
import Radio from "../Radio";
import CheckBox from "../Checkbox";

import LegendWrapper, { LegendWrapperProps } from ".";

export default {
  title: "Legend Wrapper",
  component: LegendWrapper,
  args: {
    legendText: "Legend Example",
    hintText: "This is hint text",
  },
  tags: ["autodocs"],
} as Meta<LegendWrapperProps>;

type Story = StoryObj<typeof LegendWrapper>;

const LegendWrapperWithRadios = (args: LegendWrapperProps) => {
  const [selected, setSelected] = useState("one");
  const handleChange = (value: string) => {
    setSelected(value);
  };
  return (
    <LegendWrapper {...args}>
      <Radio
        onChange={(e) => handleChange(e.target.value)}
        checked={selected === "one"}
        name="example1"
        value="one"
        hasError={args.hasError}
      >
        Option one
      </Radio>

      <Radio
        onChange={(e) => handleChange(e.target.value)}
        checked={selected === "two"}
        name="example1"
        value="two"
        hasError={args.hasError}
      >
        Option two
      </Radio>
    </LegendWrapper>
  );
};

const LegendWrapperWithCheckboxes = (args: LegendWrapperProps) => {
  const [selected, setSelected] = React.useState<Array<string>>([]);
  const handleChange = (value: string) => {
    if (selected.indexOf(value) === -1) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter((item) => item !== value));
    }
  };
  return (
    <LegendWrapper {...args}>
      <CheckBox
        onChange={(e) => handleChange(e.target.value)}
        checked={selected.indexOf("one") >= 0}
        disabled={false}
        value="one"
        hasError={args.hasError}
      />

      <CheckBox
        onChange={(e) => handleChange(e.target.value)}
        checked={selected.indexOf("two") >= 0}
        disabled={false}
        value="two"
        hasError={args.hasError}
      />
    </LegendWrapper>
  );
};

export const LegendWrapperRadio: Story = {
  name: "LegendWrapper with Radio Buttons",
  args: {},
  render: LegendWrapperWithRadios,
};

export const LegendWrapperRadioError: Story = {
  name: "LegendWrapper with Radio Buttons and Error",
  args: {
    hasError: true,
    errorMessage: "Error message",
  },
  render: LegendWrapperWithRadios,
};

export const LegendWrapperCheckbox: Story = {
  name: "LegendWrapper with Checkboxes",
  args: {},
  render: LegendWrapperWithCheckboxes,
};

export const LegendWrapperCheckboxError: Story = {
  name: "LegendWrapper with Checkboxes and Error",
  args: {
    hasError: true,
    errorMessage: "Error message",
  },
  render: LegendWrapperWithCheckboxes,
};

/// SU2C

const su2cRender = (args: LegendWrapperProps) => (
  <ThemeProvider theme={su2cTheme}>
    <LegendWrapperWithRadios {...args} />
  </ThemeProvider>
);

export const LegendWrapperRadioSU2C: Story = {
  name: "LegendWrapper with Radio Buttons SU2C",
  args: {},
  render: su2cRender,
};

export const LegendWrapperRadioErrorSU2C: Story = {
  name: "LegendWrapper with Radio Buttons and Error SU2C",
  args: {
    hasError: true,
    errorMessage: "Error message",
  },
  render: su2cRender,
};

/// Bowelbabe

const bowelbabeRender = (args: LegendWrapperProps) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <LegendWrapperWithRadios {...args} />
  </ThemeProvider>
);

export const LegendWrapperRadioBowelbabe: Story = {
  name: "LegendWrapper with Radio Buttons Bowelbabe",
  args: {},
  render: bowelbabeRender,
};

export const LegendWrapperRadioErrorBowelbabe: Story = {
  name: "LegendWrapper with Radio Buttons and Error Bowelbabe",
  args: {
    hasError: true,
    errorMessage: "Error message",
  },
  render: bowelbabeRender,
};
