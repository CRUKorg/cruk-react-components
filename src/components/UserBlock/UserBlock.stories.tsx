import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { su2cTheme, Text, Icon } from '..';
import UserBlock, { UserBlockProps } from '.';

export default {
  title: 'UserBlock (experimental)',
  component: UserBlock,
} as Meta<UserBlockProps>;

const Template: Story = args => <UserBlock {...args} />;

export const UserBlockDefault: Story = Template.bind({});
UserBlockDefault.storyName = 'UserBlock';
UserBlockDefault.args = {};

export const UserBlockWithName: Story = Template.bind({});
UserBlockWithName.storyName = 'UserBlock With Name';
UserBlockWithName.args = {
  name: 'Sam Smith',
  size: 's',
};

export const UserBlockWithCustomAvatar: Story = Template.bind({});
UserBlockWithCustomAvatar.storyName = 'UserBlock With Custom Avatar';
UserBlockWithCustomAvatar.args = {
  name: 'Sam Smith',
  size: 's',
  avatarUrl: 'https://via.placeholder.com/300/2e008b/d9318a?text=avatar',
};

export const UserBlockWithExtra: Story = Template.bind({});
UserBlockWithExtra.storyName = 'UserBlock With Extra Component';
UserBlockWithExtra.args = {
  name: 'Sam Smith',
  size: 's',
  extra: (
    <Text>
      <Icon name="clock" /> Just now
    </Text>
  ),
};

const TemplateWithSU2C: Story = args => (
  <ThemeProvider theme={su2cTheme}>
    <UserBlock {...args} />
  </ThemeProvider>
);

export const SU2CUserBlock: Story = TemplateWithSU2C.bind({});
SU2CUserBlock.storyName = 'SU2C UserBlock';
SU2CUserBlock.args = {};

export const SU2CUserBlockWithName: Story = TemplateWithSU2C.bind({});
SU2CUserBlockWithName.storyName = 'SU2C UserBlock With Name';
SU2CUserBlockWithName.args = {
  name: 'Sam Smith',
  size: 's',
};

export const SU2CUserBlockWithCustomAvatar: Story = TemplateWithSU2C.bind({});
SU2CUserBlockWithCustomAvatar.storyName = 'SU2C UserBlock With Custom Avatar';
SU2CUserBlockWithCustomAvatar.args = {
  name: 'Sam Smith',
  size: 's',
  avatarUrl: 'https://via.placeholder.com/300/2e008b/d9318a?text=avatar',
};

export const SU2CUserBlockWithExtra: Story = TemplateWithSU2C.bind({});
SU2CUserBlockWithExtra.storyName = 'SU2C UserBlock With Extra Component';
SU2CUserBlockWithExtra.args = {
  name: 'Sam Smith',
  size: 's',
  extra: (
    <Text>
      <Icon name="clock" /> Just now
    </Text>
  ),
};
