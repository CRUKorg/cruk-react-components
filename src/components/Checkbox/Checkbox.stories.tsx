import React from "react";
import { type StoryObj } from "@storybook/react-vite";

import { Box } from "..";
import AllThemesWrapper from "../AllThemesWrapper";
import CheckBox from ".";
import "./styles.css";

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

const FullComponentWithCheckboxes = (
  args: React.ComponentProps<typeof CheckBox>,
) => {
  const [selected, setSelected] = React.useState<string[]>(["one"]);

  const id = React.useId();
  const id2 = React.useId();

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
        name={`checkbox1-${id}`}
        onChange={(e) => handleChange(e.target.value)}
        checked={selected.indexOf("one") >= 0}
        {...args}
      />
      <Box>
        <CheckBox
          name={`checkbox1-${id2}`}
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
