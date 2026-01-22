import React, { useState } from "react";
import { type StoryObj } from "@storybook/react-vite";

import { Box } from "..";
import AllThemesWrapper from "../AllThemesWrapper";
import Radio, { type RadioProps } from ".";
import "./styles.css";
import "../ErrorText/styles.css";

const FullComponentWithRadios = (args: RadioProps) => {
  const [selected, setSelected] = useState("one");
  const handleChange = (targetValue: string) => {
    setSelected(targetValue);
  };

  const id = React.useId();
  const id2 = React.useId();

  const hasError = !!args.hasError;

  return (
    <fieldset style={{ border: "none" }}>
      <Radio
        name={`raidio1-${hasError ? "error" : "no-error"}-${id}`}
        onChange={(e) => handleChange(e.target.value)}
        checked={selected === "one"}
        {...args}
      >
        Option one
      </Radio>
      <Box>
        <Radio
          name={`raidio1-${hasError ? "error" : "no-error"}-${id2}`}
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
  argTypes: {
    hasError: {
      control: { type: "boolean" },
    },
    errorMessage: {
      control: { type: "text" },
    },
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
