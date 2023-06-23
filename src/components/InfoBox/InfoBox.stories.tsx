import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { bowelbabeTheme, GlobalStyle, IconFa, su2cTheme, Text } from "..";
import InfoBox, { InfoBoxProps } from ".";
import {
  faCircleCheck,
  faCircleInfo,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { ThemeProvider } from "styled-components";

export default {
  title: "InfoBox",
  component: InfoBox,
  args: {
    titleText: "InfoBox Default",
    titleTextColor: "#000",
    descriptionText:
      "This is a description block for the infobox default component",
    descriptionTextColor: "#000",
    icon: <IconFa faIcon={faCircleCheck} color="#008000" size="1.5em" />,
  },
  tags: ["autodocs"],
} as Meta<InfoBoxProps>;

type Story = StoryObj<typeof InfoBox>;

export const InfoBoxDefault: Story = {
  name: "InfoBox Default",
  args: {},
};

export const InfoBoxCustomBackground: Story = {
  name: "InfoBox Custom Background",
  args: {
    backgroundColor: "#E40173",
    titleText: "InfoBox Custom Background",
    titleTextColor: "#fff",
    descriptionText:
      "This is a description block for the infobox with custom background",
    descriptionTextColor: "#fff",
    icon: <IconFa faIcon={faCircleInfo} color="#fff" size="1.5em" />,
  },
};

export const InfoBoxWithChildren: Story = {
  name: "InfoBox With Children",
  args: {
    titleText: "InfoBox With Children",
    titleTextColor: "#000",
    descriptionText:
      "This is a description block for the infobox with children",
    descriptionTextColor: "#000",
    icon: <IconFa faIcon={faTriangleExclamation} color="danger" size="2em" />,
    children: (
      <Text color="#000" marginBottom="xs">
        This is a child text block for infobox component
      </Text>
    ),
  },
};

/// SU2C

const su2cRender = (args: InfoBoxProps) => (
  <ThemeProvider theme={su2cTheme}>
    <GlobalStyle />
    <InfoBox {...args} />
  </ThemeProvider>
);

export const InfoBoxSU2C: Story = {
  name: "InfoBox SU2C",
  args: {},
  render: su2cRender,
};

/// Bowelbabe

const bowelbabeRender = (args: InfoBoxProps) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <GlobalStyle />
    <InfoBox {...args} />
  </ThemeProvider>
);

export const InfoBoxBowelbabe: Story = {
  name: "InfoBox Bowelbabe",
  args: {},
  render: bowelbabeRender,
};
