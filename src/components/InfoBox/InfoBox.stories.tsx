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

const Template: Story = (args) => (
  <InfoBox headingText={""} descriptionText={""} {...args} />
);

export const InfoBoxDefault: Story = Template.bind({});
InfoBoxDefault.storyName = "InfoBox";
InfoBoxDefault.args = {
  headingText: "InfoBox Default",
  headingTextColor: "#000",
  descriptionText:
    "This is a description block for the infobox default component",
  descriptionTextColor: "#000",
  iconFa: <IconFa faIcon={faCircleCheck} color="#008000" size="25px" />,
};

export const TemplateWithCustomBackground: Story = Template.bind({});
TemplateWithCustomBackground.storyName = "InfoBox With Custom Background";
TemplateWithCustomBackground.args = {
  backgroundColor: "#E40173",
  headingText: "InfoBox Custom Background",
  headingTextColor: "#fff",
  descriptionText:
    "This is a description block for the infobox with custom background",
  descriptionTextColor: "#fff",
  icon: <IconFa faIcon={faCircleInfo} color="#fff" size="25px" />,
};

export const InfoBoxWithChildren: Story = Template.bind({});
InfoBoxWithChildren.storyName = "InfoBox With Children";
InfoBoxWithChildren.args = {
  headingText: "InfoBox With Children",
  headingTextColor: "#000",
  descriptionText: "This is a description block for the infobox with childrens",
  descriptionTextColor: "#000",
  icon: <IconFa faIcon={faTriangleExclamation} color="#FF0000" size="25px" />,
  children: (
    <Text color="#000" marginBottom="xs">
      This is children text block for infobox component
    </Text>
  ),
};
