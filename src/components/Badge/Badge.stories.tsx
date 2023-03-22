import React from "react";
import { Story, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import {
  faPoundSign,
  faSearch,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

import { su2cTheme, IconFa, GlobalStyle, bowelbabeTheme } from "..";
import Badge, { BadgeProps } from ".";

export default {
  title: "Badge",
  component: Badge,
} as Meta<BadgeProps>;

const Template: Story = (args) => <Badge {...args} />;

export const BadgeWithText: Story = Template.bind({});
BadgeWithText.args = {
  children: "this is text",
  backgroundColor: "primary",
};

export const Default: Story = Template.bind({});
Default.args = {
  children: <IconFa faIcon={faPoundSign} />,
};

export const BadgeWithColour: Story = Template.bind({});
BadgeWithColour.args = {
  backgroundColor: "secondary",
  children: <IconFa faIcon={faSearch} />,
};

export const BadgeWithInverseColours: Story = Template.bind({});
BadgeWithInverseColours.args = {
  backgroundColor: "textLight",
  textColor: "tertiary",
  borderColor: "tertiary",
  children: <IconFa faIcon={faComment} />,
};

const TemplateWithSU2C: Story = (args) => (
  <ThemeProvider theme={su2cTheme}>
    <GlobalStyle />
    <Badge {...args} />
  </ThemeProvider>
);

export const SU2CBadgeWithText: Story = TemplateWithSU2C.bind({});
SU2CBadgeWithText.storyName = "SU2C With Text";
SU2CBadgeWithText.args = {
  children: "this is text",
  backgroundColor: "primary",
  textColor: "textOnPrimary",
};

export const SU2CDefault: Story = TemplateWithSU2C.bind({});
SU2CDefault.storyName = "SU2C Default";
SU2CDefault.args = {
  children: <IconFa faIcon={faPoundSign} />,
};

export const SU2CBadgeWithColour: Story = TemplateWithSU2C.bind({});
SU2CBadgeWithColour.storyName = "SU2C With Colour";
SU2CBadgeWithColour.args = {
  backgroundColor: "secondary",
  children: <IconFa faIcon={faSearch} />,
};

export const SU2CBadgeWithInverseColours: Story = TemplateWithSU2C.bind({});
SU2CBadgeWithInverseColours.storyName = "SU2C With Inverse Colours";
SU2CBadgeWithInverseColours.args = {
  backgroundColor: "textLight",
  textColor: "tertiary",
  borderColor: "tertiary",
  children: <IconFa faIcon={faComment} />,
};

const TemplateWithBowelbabe: Story = (args) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <GlobalStyle />
    <Badge {...args} />
  </ThemeProvider>
);

export const BowelbabeBadgeWithText: Story = TemplateWithBowelbabe.bind({});
BowelbabeBadgeWithText.storyName = "Bowelbabe With Text";
BowelbabeBadgeWithText.args = {
  children: "this is text",
  backgroundColor: "primary",
  textColor: "textOnPrimary",
};

export const BowelbabeDefault: Story = TemplateWithBowelbabe.bind({});
BowelbabeDefault.storyName = "Bowelbabe Default";
BowelbabeDefault.args = {
  children: <IconFa faIcon={faPoundSign} />,
};

export const BowelbabeBadgeWithColour: Story = TemplateWithBowelbabe.bind({});
BowelbabeBadgeWithColour.storyName = "Bowelbabe With Colour";
BowelbabeBadgeWithColour.args = {
  backgroundColor: "secondary",
  children: <IconFa faIcon={faSearch} />,
};

export const BowelbabeBadgeWithInverseColours: Story =
  TemplateWithBowelbabe.bind({});
BowelbabeBadgeWithInverseColours.storyName = "Bowelbabe With Inverse Colours";
BowelbabeBadgeWithInverseColours.args = {
  backgroundColor: "textLight",
  textColor: "tertiary",
  borderColor: "tertiary",
  children: <IconFa faIcon={faComment} />,
};
