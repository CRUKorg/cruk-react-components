import React, { useState } from "react";
import { type StoryObj } from "@storybook/react-vite";

import Radio from "../Radio";
import CheckBox from "../Checkbox";

import AllThemesWrapper from "../AllThemesWrapper";
import LegendWrapper, { type LegendWrapperProps } from ".";
import "./styles.css";
import "../ErrorText/styles.css";
import "../Radio/styles.css";
import "../Checkbox/styles.css";
import "../LabelWrapper/styles.css";

export default {
  title: "Legend Wrapper",
  component: LegendWrapper,
  args: {
    legendText: "Legend Example",
    hintText: "This is hint text",
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof LegendWrapper>;

const LegendWrapperWithRadios = (args: LegendWrapperProps) => {
  const [selected, setSelected] = useState("one");
  const handleChange = (value: string) => {
    setSelected(value);
  };
  const id = React.useId();
  const id2 = React.useId();
  return (
    <LegendWrapper {...args}>
      <Radio
        onChange={(e) => handleChange(e.target.value)}
        checked={selected === "one"}
        name={`radio1-${id}`}
        value="one"
        hasError={args.hasError}
      >
        Option one
      </Radio>

      <Radio
        onChange={(e) => handleChange(e.target.value)}
        checked={selected === "two"}
        name={`radio1-${id2}`}
        value="two"
        hasError={args.hasError}
      >
        Option two
      </Radio>
    </LegendWrapper>
  );
};

const LegendWrapperWithCheckboxes = (args: LegendWrapperProps) => {
  const [selected, setSelected] = React.useState<string[]>(["one"]);
  const handleChange = (value: string) => {
    if (selected.indexOf(value) === -1) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter((item) => item !== value));
    }
  };
  const id = React.useId();
  const id2 = React.useId();

  return (
    <LegendWrapper {...args}>
      <CheckBox
        name={`check1-${id}`}
        onChange={(e) => handleChange(e.target.value)}
        checked={selected.indexOf("one") >= 0}
        disabled={false}
        value="one"
        hasError={args.hasError}
      />

      <CheckBox
        name={`check1-${id2}`}
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
  render: (args) => (
    <AllThemesWrapper>
      <LegendWrapperWithRadios {...args} />
    </AllThemesWrapper>
  ),
};

export const LegendWrapperRadioError: Story = {
  name: "LegendWrapper with Radio Buttons and Error",
  args: {
    hasError: true,
    errorMessage: "Error message",
  },
  render: (args) => (
    <AllThemesWrapper>
      <LegendWrapperWithRadios {...args} />
    </AllThemesWrapper>
  ),
};

export const LegendWrapperCheckbox: Story = {
  name: "LegendWrapper with Checkboxes",
  args: {},
  render: (args) => (
    <AllThemesWrapper>
      <LegendWrapperWithCheckboxes {...args} />
    </AllThemesWrapper>
  ),
};

export const LegendWrapperCheckboxError: Story = {
  name: "LegendWrapper with Checkboxes and Error",
  args: {
    hasError: true,
    errorMessage: "Error message",
  },
  render: (args) => (
    <AllThemesWrapper>
      <LegendWrapperWithCheckboxes {...args} />
    </AllThemesWrapper>
  ),
};
