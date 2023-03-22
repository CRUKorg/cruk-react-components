import React from "react";
import { ThemeProvider } from "styled-components";
import { Story, Meta } from "@storybook/react";
import Heading, { HeadingProps } from ".";
import { su2cTheme, GlobalStyle, bowelbabeTheme } from "..";

export default {
  title: "Heading",
  component: Heading,
} as Meta<HeadingProps>;

const Template: Story = (args) => <Heading {...args} />;

export const DefaultHeading: Story = Template.bind({});
DefaultHeading.args = {
  children: "H2 is the default",
  textColor: "textDark",
};

export const HeadingSize: Story = Template.bind({});
HeadingSize.args = {
  textSize: "xxxxl",
  children: "This is H2 with H1 size",
};

export const HeadingAligned: Story = Template.bind({});
HeadingAligned.args = {
  textAlign: "center",
  children: "This is center aligned",
};

export const H1: Story = Template.bind({});
H1.storyName = "H1";
H1.args = {
  h1: true,
  children: "This is H1",
};

export const H2: Story = Template.bind({});
H2.storyName = "H2";
H2.args = {
  h2: true,
  children: "This is H2",
};

export const H3: Story = Template.bind({});
H3.storyName = "H3";
H3.args = {
  h3: true,
  children: "This is H3",
};

export const H4: Story = Template.bind({});
H4.storyName = "H4";
H4.args = {
  h4: true,
  children: "This is H4",
};

export const H5: Story = Template.bind({});
H5.storyName = "H5";
H5.args = {
  h5: true,
  children: "This is H5",
};

export const H6: Story = Template.bind({});
H6.storyName = "H6";
H6.args = {
  h6: true,
  children: "This is H6",
};

const TemplateWithSU2C: Story = (args) => (
  <ThemeProvider theme={su2cTheme}>
    <GlobalStyle />
    <Heading {...args} />
  </ThemeProvider>
);

export const SU2C_H1: Story = TemplateWithSU2C.bind({});
SU2C_H1.storyName = "SU2C H1";
SU2C_H1.args = {
  h1: true,
  children: "This is H1",
};

export const SU2C_H2: Story = TemplateWithSU2C.bind({});
SU2C_H2.storyName = "SU2C H2";
SU2C_H2.args = {
  h2: true,
  children: "This is H2",
};

export const SU2C_H3: Story = TemplateWithSU2C.bind({});
SU2C_H3.storyName = "SU2C H3";
SU2C_H3.args = {
  h3: true,
  children: "This is H3",
};

export const SU2C_H4: Story = TemplateWithSU2C.bind({});
SU2C_H4.storyName = "SU2C H4";
SU2C_H4.args = {
  h4: true,
  children: "This is H4",
};

export const SU2C_H5: Story = TemplateWithSU2C.bind({});
SU2C_H5.storyName = "SU2C H5";
SU2C_H5.args = {
  h5: true,
  children: "This is H5",
};

export const SU2C_H6: Story = TemplateWithSU2C.bind({});
SU2C_H6.storyName = "SU2C H6";
SU2C_H6.args = {
  h6: true,
  children: "This is H6",
};

const TemplateWithBowelbabe: Story = (args) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <GlobalStyle />
    <Heading {...args} />
  </ThemeProvider>
);

export const Bowelbabe_H1: Story = TemplateWithBowelbabe.bind({});
Bowelbabe_H1.storyName = "Bowelbabe H1";
Bowelbabe_H1.args = {
  h1: true,
  children: "This is H1",
};

export const Bowelbabe_H2: Story = TemplateWithBowelbabe.bind({});
Bowelbabe_H2.storyName = "Bowelbabe H2";
Bowelbabe_H2.args = {
  h2: true,
  children: "This is H2",
};

export const Bowelbabe_H3: Story = TemplateWithBowelbabe.bind({});
Bowelbabe_H3.storyName = "Bowelbabe H3";
Bowelbabe_H3.args = {
  h3: true,
  children: "This is H3",
};

export const Bowelbabe_H4: Story = TemplateWithBowelbabe.bind({});
Bowelbabe_H4.storyName = "Bowelbabe H4";
Bowelbabe_H4.args = {
  h4: true,
  children: "This is H4",
};

export const Bowelbabe_H5: Story = TemplateWithBowelbabe.bind({});
Bowelbabe_H5.storyName = "Bowelbabe H5";
Bowelbabe_H5.args = {
  h5: true,
  children: "This is H5",
};

export const Bowelbabe_H6: Story = TemplateWithBowelbabe.bind({});
Bowelbabe_H6.storyName = "Bowelbabe H6";
Bowelbabe_H6.args = {
  h6: true,
  children: "This is H6",
};
