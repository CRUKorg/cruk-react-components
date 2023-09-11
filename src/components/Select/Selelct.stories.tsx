import React from "react";
import { StoryObj } from "@storybook/react";

import Select, { SelectProps } from ".";
import AllThemesWrapper from "../AllThemesWrapper";

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
};

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
  render: (args) => (
    <AllThemesWrapper>
      <SelectWithState {...args} />
    </AllThemesWrapper>
  ),
};

export const SelectWithError: Story = {
  name: "SelectWithError",
  args: { hasError: true, errorMessage: "error message" },
  render: (args) => (
    <AllThemesWrapper>
      <SelectWithState {...args} />
    </AllThemesWrapper>
  ),
};
