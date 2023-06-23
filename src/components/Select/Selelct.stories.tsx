import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { bowelbabeTheme, su2cTheme } from "..";
import Select, { SelectProps } from ".";

export default {
  title: "Select",
  component: Select,
  args: {
    disabled: false,
    required: false,
    label: "Label here",
    hintText: "hint text here",
    hasError: false,
    errorMessage: undefined,
  },
  tags: ["autodocs"],
} as Meta<SelectProps>;

type Story = StoryObj<typeof Select>;

const SelectWithState = (args: SelectProps) => {
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

export const SelectDefault: Story = {
  name: "SelectDefault",
  args: {},
  render: SelectWithState,
};

export const SelectWithError: Story = {
  name: "SelectWithError",
  args: { hasError: true, errorMessage: "error message" },
  render: SelectWithState,
};

/// SU2C

const su2cRender = (args: SelectProps) => (
  <ThemeProvider theme={su2cTheme}>
    <SelectWithState {...args} />
  </ThemeProvider>
);

export const SelectSU2C: Story = {
  name: "SelectSU2C",
  args: {},
  render: su2cRender,
};

export const SelectWithErrorSU2C: Story = {
  name: "SelectWithErrorSU2C",
  args: { hasError: true, errorMessage: "error message" },
  render: su2cRender,
};

/// Bowelbabe

const bowelbabeRender = (args: SelectProps) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <SelectWithState {...args} />
  </ThemeProvider>
);
export const SelectBowelbabe: Story = {
  name: "SelectBowelbabe",
  args: {},
  render: bowelbabeRender,
};

export const SelectWithErrorBowelbabe: Story = {
  name: "SelectWithErrorBowelbabe",
  args: { hasError: true, errorMessage: "error message" },
  render: bowelbabeRender,
};
