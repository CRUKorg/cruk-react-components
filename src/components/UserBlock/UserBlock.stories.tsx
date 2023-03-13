import React from "react";
import { Story, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import {
  crukTheme,
  su2cTheme,
  Text,
  IconFa,
  GlobalStyle,
  bowelbabeTheme,
} from "..";
import UserBlock, { UserBlockProps } from ".";

export default {
  title: "UserBlock (experimental)",
  component: UserBlock,
} as Meta<UserBlockProps>;

const Template: Story = (args) => <UserBlock {...args} />;

export const UserBlockDefault: Story = Template.bind({});
UserBlockDefault.storyName = "UserBlock";
UserBlockDefault.args = {};

export const UserBlockWithName: Story = Template.bind({});
UserBlockWithName.storyName = "UserBlock With Name";
UserBlockWithName.args = {
  name: "Sam Smith",
  size: "s",
};

export const UserBlockWithCustomAvatar: Story = Template.bind({});
UserBlockWithCustomAvatar.storyName = "UserBlock With Custom Avatar";
UserBlockWithCustomAvatar.args = {
  name: "Sam Smith",
  size: "s",
  avatarUrl: "https://via.placeholder.com/300/2e008b/d9318a?text=avatar",
};

export const UserBlockWithExtra: Story = Template.bind({});
UserBlockWithExtra.storyName = "UserBlock With Extra Component";
UserBlockWithExtra.args = {
  name: "Sam Smith",
  size: "s",
  extra: (
    <Text>
      <IconFa faIcon={faClock} /> Just now
    </Text>
  ),
};

const TemplateWithSU2C: Story = (args) => (
  <ThemeProvider theme={su2cTheme}>
    <GlobalStyle />
    <UserBlock {...args} />
  </ThemeProvider>
);

export const SU2CUserBlock: Story = TemplateWithSU2C.bind({});
SU2CUserBlock.storyName = "SU2C UserBlock";
SU2CUserBlock.args = {};

export const SU2CUserBlockWithName: Story = TemplateWithSU2C.bind({});
SU2CUserBlockWithName.storyName = "SU2C UserBlock With Name";
SU2CUserBlockWithName.args = {
  name: "Sam Smith",
  size: "s",
};

export const SU2CUserBlockWithCustomAvatar: Story = TemplateWithSU2C.bind({});
SU2CUserBlockWithCustomAvatar.storyName = "SU2C UserBlock With Custom Avatar";
SU2CUserBlockWithCustomAvatar.args = {
  name: "Sam Smith",
  size: "s",
  avatarUrl: `${crukTheme.siteConfig.assetPath}images/logos/cruk-160.png`,
};

export const SU2CUserBlockWithExtra: Story = TemplateWithSU2C.bind({});
SU2CUserBlockWithExtra.storyName = "SU2C UserBlock With Extra Component";
SU2CUserBlockWithExtra.args = {
  name: "Sam Smith",
  size: "s",
  extra: (
    <Text>
      <IconFa faIcon={faClock} /> Just now
    </Text>
  ),
};

const TemplateWithBowelbabe: Story = (args) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <GlobalStyle />
    <UserBlock {...args} />
  </ThemeProvider>
);

export const BowelbabeUserBlock: Story = TemplateWithBowelbabe.bind({});
BowelbabeUserBlock.storyName = "Bowelbabe UserBlock";
BowelbabeUserBlock.args = {};

export const BowelbabeUserBlockWithName: Story = TemplateWithBowelbabe.bind({});
BowelbabeUserBlockWithName.storyName = "Bowelbabe UserBlock With Name";
BowelbabeUserBlockWithName.args = {
  name: "Sam Smith",
  size: "s",
};

export const BowelbabeUserBlockWithCustomAvatar: Story =
  TemplateWithBowelbabe.bind({});
BowelbabeUserBlockWithCustomAvatar.storyName =
  "Bowelbabe UserBlock With Custom Avatar";
BowelbabeUserBlockWithCustomAvatar.args = {
  name: "Sam Smith",
  size: "s",
  avatarUrl: `${crukTheme.siteConfig.assetPath}images/logos/cruk-160.png`,
};

export const BowelbabeUserBlockWithExtra: Story = TemplateWithBowelbabe.bind(
  {}
);
BowelbabeUserBlockWithExtra.storyName =
  "Bowelbabe UserBlock With Extra Component";
BowelbabeUserBlockWithExtra.args = {
  name: "Sam Smith",
  size: "s",
  extra: (
    <Text>
      <IconFa faIcon={faClock} /> Just now
    </Text>
  ),
};
