import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { su2cTheme, Box, GlobalStyle, bowelbabeTheme } from "..";
import Radio, { RadioProps } from ".";

export default {
  title: "Radio",
  component: Radio,
} as Meta<RadioProps>;

const Template: Story<RadioProps> = (args) => {
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

const TemplateError: Story<RadioProps> = (args) => {
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
          errorMessage="Error Message"
          hasError={true}
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

export const RadioDefault: Story<RadioProps> = Template.bind({});
RadioDefault.storyName = "Radio";
RadioDefault.args = {
  disabled: false,
  name: "example1",
  value: "one",
};

export const RadioDefaultError: Story<RadioProps> = TemplateError.bind({});
RadioDefaultError.storyName = "Radio Error";
RadioDefaultError.args = {
  id: "radio",
  value: "one",
  disabled: false,
  hasError: true,
  errorMessage: "Error Message",
};

const TemplateWithSU2C: Story<RadioProps> = (args) => {
  const [selected, setSelected] = useState(args.value);
  const handleChange = (value: string) => {
    setSelected(value);
  };
  return (
    <ThemeProvider theme={su2cTheme}>
      <GlobalStyle />
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
    </ThemeProvider>
  );
};

export const SU2CRadio: Story<RadioProps> = TemplateWithSU2C.bind({});
SU2CRadio.storyName = "SU2C Radio";
SU2CRadio.args = {
  value: "one",
  disabled: false,
};

const TemplateWithBowelbabe: Story<RadioProps> = (args) => {
  const [selected, setSelected] = useState(args.value);
  const handleChange = (value: string) => {
    setSelected(value);
  };
  return (
    <ThemeProvider theme={bowelbabeTheme}>
      <GlobalStyle />
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
    </ThemeProvider>
  );
};

export const BowelbabeRadio: Story<RadioProps> = TemplateWithBowelbabe.bind({});
BowelbabeRadio.storyName = "Bowelbabe Radio";
BowelbabeRadio.args = {
  value: "one",
  disabled: false,
};
