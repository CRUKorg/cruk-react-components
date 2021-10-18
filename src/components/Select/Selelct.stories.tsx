import React from "react";
import { Story, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { su2cTheme } from "..";
import Select, { SelectProps } from ".";

export default {
  title: "Select",
  component: Select,
} as Meta<SelectProps>;

const Template: Story<SelectProps> = (args) => {
  const [selectedPet, setSelectedPet] = React.useState("");
  return (
    <Select
      {...args}
      onChange={(e) => setSelectedPet(e.target.value)}
      value={selectedPet}
    >
      <option disabled value="">
        --Please choose an option--
      </option>
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
    </Select>
  );
};

export const SelectWithLabel: Story<SelectProps> = Template.bind({});
SelectWithLabel.args = {
  disabled: false,
  required: false,
  value: "",
  label: "Disabled option",
  hintText: undefined,
  hasError: false,
  errorMessage: undefined,
};

export const SelectWithError: Story<SelectProps> = Template.bind({});
SelectWithError.args = {
  id: "select",
  disabled: false,
  required: false,
  value: "",
  label: "Disabled option",
  hintText: undefined,
  hasError: true,
  errorMessage: "error message",
};

const TemplateWithSU2C: Story<SelectProps> = (args) => {
  const [selectedPet, setSelectedPet] = React.useState("");
  return (
    <ThemeProvider theme={su2cTheme}>
      <Select
        {...args}
        onChange={(e) => setSelectedPet(e.target.value)}
        value={selectedPet}
      >
        <option disabled value="">
          --Please choose an option--
        </option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
      </Select>
    </ThemeProvider>
  );
};

export const SU2CSelectWithLabel: Story<SelectProps> = TemplateWithSU2C.bind(
  {}
);
SU2CSelectWithLabel.storyName = "SU2C Select With Label";
SU2CSelectWithLabel.args = {
  disabled: false,
  required: false,
  value: "",
  label: "Disabled option",
  hintText: undefined,
  hasError: false,
  errorMessage: undefined,
};

export const SU2CSelectWithError: Story<SelectProps> = Template.bind({});
SU2CSelectWithError.storyName = "SU2C Select With Error";
SU2CSelectWithError.args = {
  disabled: false,
  required: false,
  value: "",
  label: "Disabled option",
  hintText: undefined,
  hasError: true,
  errorMessage: "error message",
};
