import React from "react";
import { Story, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import { su2cTheme, Text, IconFa, GlobalStyle, bowelbabeTheme } from "..";
import Totaliser, { TotaliserProps } from ".";

export default {
  title: "Totaliser (experimental)",
  component: Totaliser,
} as Meta<TotaliserProps>;

const Template: Story<TotaliserProps> = (args) => <Totaliser {...args} />;

export const TotaliserWithTarget: Story<TotaliserProps> = Template.bind({});
TotaliserWithTarget.args = {
  total: 50.0,
  additionalAmount: 20.0,
  target: 100,
  giftAid: 25,
};

export const TotaliserWithoutTarget: Story<TotaliserProps> = Template.bind({});
TotaliserWithoutTarget.args = {
  total: 99.99,
  giftAid: 25,
};

export const TotaliserTextSummaryMessage: Story<TotaliserProps> = Template.bind(
  {}
);
TotaliserTextSummaryMessage.args = {
  total: 99.99,
  target: 100,
  giftAid: 25,
  summaryMessage: "Custom text summary message",
};

export const TotaliserComponentSummaryMessage: Story<TotaliserProps> =
  Template.bind({});
TotaliserComponentSummaryMessage.args = {
  total: 99.99,
  target: 100,
  giftAid: 25,
  summaryMessage: (
    <Text>
      Custom component summary message <IconFa faIcon={faEdit} />
    </Text>
  ),
};

export const TotaliserCompact: Story<TotaliserProps> = Template.bind({});
TotaliserCompact.args = {
  total: 99.99,
  target: 100,
  giftAid: 25,
  isCompact: true,
};

const TemplateWithSU2C: Story<TotaliserProps> = (args) => (
  <ThemeProvider theme={su2cTheme}>
    <GlobalStyle />
    <Totaliser {...args} />
  </ThemeProvider>
);

export const SU2CTotaliserWithTarget: Story<TotaliserProps> =
  TemplateWithSU2C.bind({});
SU2CTotaliserWithTarget.storyName = "SU2C Totaliser With Target";
SU2CTotaliserWithTarget.args = {
  total: 50.0,
  additionalAmount: 20.0,
  target: 100,
  giftAid: 25,
};

export const SU2CTotaliserWithoutTarget: Story<TotaliserProps> =
  TemplateWithSU2C.bind({});
SU2CTotaliserWithoutTarget.storyName = "SU2C Totaliser Without Target";
SU2CTotaliserWithoutTarget.args = {
  total: 99.99,
  giftAid: 25,
};

export const SU2CTotaliserTextSummaryMessage: Story<TotaliserProps> =
  TemplateWithSU2C.bind({});
SU2CTotaliserTextSummaryMessage.storyName =
  "SU2C Totaliser Text Summary Message";
SU2CTotaliserTextSummaryMessage.args = {
  total: 99.99,
  target: 100,
  giftAid: 25,
  summaryMessage: "Custom text summary message",
};

export const SU2CTotaliserComponentSummaryMessage: Story<TotaliserProps> =
  TemplateWithSU2C.bind({});
SU2CTotaliserComponentSummaryMessage.storyName =
  "SU2C Totaliser Component Summary Message";
SU2CTotaliserComponentSummaryMessage.args = {
  total: 99.99,
  target: 100,
  giftAid: 25,
  summaryMessage: (
    <Text>
      Custom component summary message <IconFa faIcon={faEdit} />
    </Text>
  ),
};

export const SU2CTotaliserCompact: Story<TotaliserProps> =
  TemplateWithSU2C.bind({});
SU2CTotaliserCompact.storyName = "SU2C Totaliser Compact";
SU2CTotaliserCompact.args = {
  total: 99.99,
  target: 100,
  giftAid: 25,
  isCompact: true,
};

const TemplateWithBowelbabe: Story<TotaliserProps> = (args) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <GlobalStyle />
    <Totaliser {...args} />
  </ThemeProvider>
);

export const BowelbabeTotaliserWithTarget: Story<TotaliserProps> =
  TemplateWithBowelbabe.bind({});
BowelbabeTotaliserWithTarget.storyName = "Bowelbabe Totaliser With Target";
BowelbabeTotaliserWithTarget.args = {
  total: 50.0,
  additionalAmount: 20.0,
  target: 100,
  giftAid: 25,
};

export const BowelbabeTotaliserWithoutTarget: Story<TotaliserProps> =
  TemplateWithBowelbabe.bind({});
BowelbabeTotaliserWithoutTarget.storyName =
  "Bowelbabe Totaliser Without Target";
BowelbabeTotaliserWithoutTarget.args = {
  total: 99.99,
  giftAid: 25,
};

export const BowelbabeTotaliserTextSummaryMessage: Story<TotaliserProps> =
  TemplateWithBowelbabe.bind({});
BowelbabeTotaliserTextSummaryMessage.storyName =
  "Bowelbabe Totaliser Text Summary Message";
BowelbabeTotaliserTextSummaryMessage.args = {
  total: 99.99,
  target: 100,
  giftAid: 25,
  summaryMessage: "Custom text summary message",
};

export const BowelbabeTotaliserComponentSummaryMessage: Story<TotaliserProps> =
  TemplateWithBowelbabe.bind({});
BowelbabeTotaliserComponentSummaryMessage.storyName =
  "Bowelbabe Totaliser Component Summary Message";
BowelbabeTotaliserComponentSummaryMessage.args = {
  total: 99.99,
  target: 100,
  giftAid: 25,
  summaryMessage: (
    <Text>
      Custom component summary message <IconFa faIcon={faEdit} />
    </Text>
  ),
};

export const BowelbabeTotaliserCompact: Story<TotaliserProps> =
  TemplateWithBowelbabe.bind({});
BowelbabeTotaliserCompact.storyName = "Bowelbabe Totaliser Compact";
BowelbabeTotaliserCompact.args = {
  total: 99.99,
  target: 100,
  giftAid: 25,
  isCompact: true,
};
