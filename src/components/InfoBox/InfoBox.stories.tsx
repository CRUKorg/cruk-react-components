import React from "react";
import { type StoryObj } from "@storybook/react";
import { IconFa, Text } from "..";
import InfoBox from ".";
import {
  faCircleCheck,
  faCircleInfo,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import AllThemesWrapper from "../AllThemesWrapper";

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
};

type Story = StoryObj<typeof InfoBox>;

export const InfoBoxDefault: Story = {
  name: "InfoBox Default",
  args: {},
  render: (args) => (
    <AllThemesWrapper>
      <InfoBox {...args} />
    </AllThemesWrapper>
  ),
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
  render: (args) => (
    <AllThemesWrapper>
      <InfoBox {...args} />
    </AllThemesWrapper>
  ),
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
  render: (args) => (
    <AllThemesWrapper>
      <InfoBox {...args} />
    </AllThemesWrapper>
  ),
};
