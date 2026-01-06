import React from "react";
import { type StoryObj } from "@storybook/react-vite";
import {
  faCircleCheck,
  faCircleInfo,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

import AllThemesWrapper from "../AllThemesWrapper";
import { IconFa, Text } from "..";
import InfoBox from ".";
import "./styles.css";
import "../Text/styles.css";
import "../Box/styles.css";
import "../IconFa/styles.css";
import "../Heading/styles.css";

export default {
  title: "InfoBox",
  component: InfoBox,
  args: {
    titleText: "InfoBox Default",
    titleTextColor: "#000",
    descriptionText:
      "This is a description block for the infobox default component",
    descriptionTextColor: "#000",
    icon: <IconFa faIcon={faCircleCheck} color="success" size="m" />,
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
    backgroundColor: "primary",
    titleText: "InfoBox Custom Background",
    titleTextColor: "text-on-primary",
    descriptionText:
      "This is a description block for the infobox with custom background",
    descriptionTextColor: "text-on-primary",
    icon: <IconFa faIcon={faCircleInfo} color="text-on-primary" size="m" />,
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
    titleTextColor: "text-dark",
    descriptionText:
      "This is a description block for the infobox with children",
    descriptionTextColor: "text-dark",
    icon: <IconFa faIcon={faTriangleExclamation} color="danger" size="m" />,
    children: (
      <Text color="text-dark" marginBottom="xs">
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
