import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { su2cTheme, Text, Box, GlobalStyle } from '..';
import Collapse, { CollapseProps } from '.';

export default {
  title: 'Collapse (experimental)',
  component: Collapse,
} as Meta<CollapseProps>;

const Template: Story<CollapseProps> = args => <Collapse {...args} />;

export const CollapseWithTextHeader: Story<CollapseProps> = Template.bind({});
CollapseWithTextHeader.args = {
  id: 'default',
  headerTitleText: 'Lorem Ipsum',
  children: (
    <Text>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
      of
    </Text>
  ),
};

export const CollapseWithModifiedText: Story<CollapseProps> = Template.bind({});
CollapseWithModifiedText.args = {
  id: 'default',
  headerTitleText: 'A long title with headerTitleTextColor and headerTitleTextSize',
  headerTitleTextColor: 'primary',
  headerTitleTextSize: 'xl',
  children: (
    <Text>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s
    </Text>
  ),
};

export const CollapseWitCustomHeader: Story<CollapseProps> = Template.bind({});
CollapseWitCustomHeader.args = {
  id: 'custom',
  headerComponent: (
    <Box backgroundColor="primary">
      <Text textColor="textOnPrimary">This is box header click me</Text>
    </Box>
  ),
  children: (
    <Box backgroundColor="primary">
      <Text textColor="textOnPrimary">This is box</Text>
    </Box>
  ),
};

const TemplateWithSU2C: Story<CollapseProps> = args => (
  <ThemeProvider theme={su2cTheme}>
    <GlobalStyle />
    <Collapse {...args} />
  </ThemeProvider>
);

export const SU2CCollapseWithTextHeader: Story<CollapseProps> = TemplateWithSU2C.bind({});
SU2CCollapseWithTextHeader.storyName = 'SU2C Collapse With Text Header';
SU2CCollapseWithTextHeader.args = {
  id: 'default',
  headerTitleText: 'Lorem Ipsum',
  children: (
    <Text>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
      of
    </Text>
  ),
};

export const SU2CCollapseWithModifiedText: Story<CollapseProps> = TemplateWithSU2C.bind({});
SU2CCollapseWithModifiedText.storyName = 'SU2C Collapse With Modified Text';
SU2CCollapseWithModifiedText.args = {
  id: 'default',
  headerTitleText: 'A long title with headerTitleTextColor and headerTitleTextSize',
  headerTitleTextColor: 'primary',
  headerTitleTextSize: 'xl',
  children: (
    <Text>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s
    </Text>
  ),
};

export const SU2CCollapseWitCustomHeader: Story<CollapseProps> = TemplateWithSU2C.bind({});
SU2CCollapseWitCustomHeader.storyName = 'SU2C Collapse With Custom Header';
SU2CCollapseWitCustomHeader.args = {
  id: 'custom',
  headerComponent: (
    <Box backgroundColor="primary">
      <Text textColor="textOnPrimary">This is box header click me</Text>
    </Box>
  ),
  children: (
    <Box backgroundColor="primary">
      <Text textColor="textOnPrimary">This is box</Text>
    </Box>
  ),
};
