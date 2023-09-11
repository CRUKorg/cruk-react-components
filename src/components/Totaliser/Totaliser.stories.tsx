import React from "react";
import { StoryObj } from "@storybook/react";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import { Text, IconFa } from "..";
import Totaliser from ".";
import AllThemesWrapper from "../AllThemesWrapper";

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
};

type Story = StoryObj<typeof Totaliser>;

export const TotaliserWithoutTarget: Story = {
  name: "Totaliser Without Target",
  args: {
    target: 0,
  },
  render: (args) => (
    <AllThemesWrapper>
      <Totaliser {...args} />
    </AllThemesWrapper>
  ),
};

export const TotaliserTextSummaryMessage: Story = {
  name: "Totaliser Text Summary Message",
  args: {
    summaryMessage: "Custom text summary message",
  },
  render: (args) => (
    <AllThemesWrapper>
      <Totaliser {...args} />
    </AllThemesWrapper>
  ),
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
  render: (args) => (
    <AllThemesWrapper>
      <Totaliser {...args} />
    </AllThemesWrapper>
  ),
};

export const TotaliserCompact: Story = {
  name: "Totaliser Compact",
  args: {
    isCompact: true,
  },
  render: (args) => (
    <AllThemesWrapper>
      <Totaliser {...args} />
    </AllThemesWrapper>
  ),
};
