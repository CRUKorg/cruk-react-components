import React from "react";
import { Story, Meta } from "@storybook/react";
import { IconFa, Text } from "..";
import InfoBox, { InfoBoxProps } from ".";
import {
  faCircleCheck,
  faCircleInfo,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

export default {
  title: "InfoBox",
  component: InfoBox,
} as Meta<InfoBoxProps>;

const Template: Story = (args: Partial<InfoBoxProps>) => (
  <InfoBox titleText={""} descriptionText={""} {...args} />
);

export const InfoBoxDefault: Story = Template.bind({});
InfoBoxDefault.storyName = "InfoBox";
InfoBoxDefault.args = {
  titleText: "InfoBox Default",
  titleTextColor: "#000",
  descriptionText:
    "This is a description block for the infobox default component",
  descriptionTextColor: "#000",
  icon: <IconFa faIcon={faCircleCheck} color="#008000" size="1.5em" />,
};

export const TemplateWithCustomBackground: Story = Template.bind({});
TemplateWithCustomBackground.storyName = "InfoBox With Custom Background";
TemplateWithCustomBackground.args = {
  backgroundColor: "#E40173",
  titleText: "InfoBox Custom Background",
  titleTextColor: "#fff",
  descriptionText:
    "This is a description block for the infobox with custom background",
  descriptionTextColor: "#fff",
  icon: <IconFa faIcon={faCircleInfo} color="#fff" size="1.5em" />,
};

export const InfoBoxWithChildren: Story = Template.bind({});
InfoBoxWithChildren.storyName = "InfoBox With Children";
InfoBoxWithChildren.args = {
  titleText: "InfoBox With Children",
  titleTextColor: "#000",
  descriptionText: "This is a description block for the infobox with childrens",
  descriptionTextColor: "#000",
  icon: <IconFa faIcon={faTriangleExclamation} color="#FF0000" size="2em" />,
  children: (
    <Text color="#000" marginBottom="xs">
      This is children text block for infobox component
    </Text>
  ),
};
