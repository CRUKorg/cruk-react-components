import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import { su2cTheme, Text, IconFa, bowelbabeTheme } from "..";
import Totaliser, { TotaliserProps } from ".";

export default {
  title: "Totaliser (experimental)",
  component: Totaliser,
  args: {
    total: 50.0,
    additionalAmount: 20.0,
    target: 100,
    giftAid: 25,
  },
  tags: ["autodocs"],
} as Meta<TotaliserProps>;

type Story = StoryObj<typeof Totaliser>;

export const TotaliserWithoutTarget: Story = {
  name: "Totaliser Without Target",
  args: {
    target: 0,
  },
};

export const TotaliserTextSummaryMessage: Story = {
  name: "Totaliser Text Summary Message",
  args: {
    summaryMessage: "Custom text summary message",
  },
};

export const TotaliserTextSummaryMessageAsComponent: Story = {
  name: "Totaliser Text Summary Message as Component",
  args: {
    summaryMessage: (
      <Text>
        Custom component summary message <IconFa faIcon={faEdit} />
      </Text>
    ),
  },
};

export const TotaliserCompact: Story = {
  name: "Totaliser Compact",
  args: {
    isCompact: true,
  },
};

/// SU2C

const su2cRender = (args: TotaliserProps) => (
  <ThemeProvider theme={su2cTheme}>
    <Totaliser {...args} />
  </ThemeProvider>
);

export const TotaliserWithoutTargetSU2C: Story = {
  name: "Totalise rWithout Target SU2C",
  args: {
    target: 0,
  },
  render: su2cRender,
};

export const TotaliserTextSummaryMessageSU2C: Story = {
  name: "Totaliser Text Summary Message SU2C",
  args: {
    summaryMessage: "Custom text summary message",
  },
  render: su2cRender,
};

export const TotaliserTextSummaryMessageAsComponentSU2C: Story = {
  name: "Totaliser Text Summary Message as Component SU2C",
  args: {
    summaryMessage: (
      <Text>
        Custom component summary message <IconFa faIcon={faEdit} />
      </Text>
    ),
  },
};

export const TotaliserCompactSU2C: Story = {
  name: "Totaliser Compact SU2C",
  args: {
    isCompact: true,
  },
  render: su2cRender,
};

/// Bowelbabe

const bowelbabeRender = (args: TotaliserProps) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <Totaliser {...args} />
  </ThemeProvider>
);

export const TotaliserWithoutTargetBowelbabe: Story = {
  name: "Totalise rWithout Target Bowelbabe",
  args: {
    target: 0,
  },
  render: bowelbabeRender,
};

export const TotaliserTextSummaryMessageBowelbabe: Story = {
  name: "Totaliser Text Summary Message Bowelbabe",
  args: {
    summaryMessage: "Custom text summary message",
  },
  render: bowelbabeRender,
};

export const TotaliserTextSummaryMessageAsComponentBowelbabe: Story = {
  name: "Totaliser Text Summary Message as Component Bowelbabe",
  args: {
    summaryMessage: (
      <Text>
        Custom component summary message <IconFa faIcon={faEdit} />
      </Text>
    ),
  },
};

export const TotaliserCompactBowelbabe: Story = {
  name: "Totaliser Compact Bowelbabe",
  args: {
    isCompact: true,
  },
  render: bowelbabeRender,
};
