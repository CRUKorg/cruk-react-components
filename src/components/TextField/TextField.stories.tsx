import React from "react";
import { Story, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import Button from "src/components/Button";
import Icon from "src/components/Icon";

import { GlobalStyle, su2cTheme } from "..";
import TextField, { TextFieldProps } from ".";

export default {
  title: "TextField",
  component: TextField,
} as Meta<TextFieldProps>;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;
const TemplateExtraRight: Story<TextFieldProps> = (args) => (
  <TextField
    {...args}
    extraRight={
      <Button appearance="text" aria-label="search">
        <Icon name="search" />
      </Button>
    }
  />
);

export const TextFieldDefault: Story<TextFieldProps> = Template.bind({});
TextFieldDefault.storyName = "TextField";
TextFieldDefault.args = {
  value: undefined,
  disabled: false,
  required: false,
  label: "TextField",
  hintText: undefined,
  hasError: false,
  errorMessage: undefined,
};

export const TextFieldWithError: Story<TextFieldProps> = Template.bind({});
TextFieldWithError.storyName = "TextField With Error";
TextFieldWithError.args = {
  id: "textfield",
  value: undefined,
  disabled: false,
  required: false,
  label: "TextField",
  hintText: undefined,
  hasError: true,
  errorMessage: "error message",
};

export const TextFieldWithExtraLeft: Story<TextFieldProps> = Template.bind({});
TextFieldWithExtraLeft.storyName = "TextField extra left";
TextFieldWithExtraLeft.args = {
  value: undefined,
  disabled: false,
  required: false,
  label: "Fundrasing Target",
  hintText: undefined,
  hasError: false,
  errorMessage: undefined,
  extraLeft: "£",
};

export const TextFieldWithExtraRight: Story<TextFieldProps> =
  TemplateExtraRight.bind({});
TextFieldWithExtraRight.storyName = "TextField extra right";
TextFieldWithExtraRight.args = {
  value: undefined,
  disabled: false,
  required: false,
  label: "Search",
  hintText: undefined,
  hasError: false,
  errorMessage: undefined,
};

const TemplateWithSU2C: Story<TextFieldProps> = (args) => (
  <ThemeProvider theme={su2cTheme}>
    <GlobalStyle />
    <TextField {...args} />
  </ThemeProvider>
);

export const SU2CTextField: Story<TextFieldProps> = TemplateWithSU2C.bind({});
SU2CTextField.storyName = "SU2C TextField";
SU2CTextField.args = {
  value: undefined,
  disabled: false,
  required: false,
  label: "TextField",
  hintText: undefined,
  hasError: false,
  errorMessage: undefined,
};

export const SU2CTextFieldWithError: Story<TextFieldProps> =
  TemplateWithSU2C.bind({});
SU2CTextFieldWithError.storyName = "SU2C TextField With Error";
SU2CTextFieldWithError.args = {
  value: undefined,
  disabled: false,
  required: false,
  label: "TextField",
  hintText: undefined,
  hasError: true,
  errorMessage: "error message",
};
