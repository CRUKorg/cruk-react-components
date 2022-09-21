import React from "react";
import { Story, Meta } from "@storybook/react";
import { Text } from "..";
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

const Template: Story = (args) => <InfoBox {...args} />;

export const InfoBoxDefault: Story = Template.bind({});
InfoBoxDefault.storyName = "InfoBox";
InfoBoxDefault.args = {
  headingText: "InfoBox Title",
  headingTextColor: "#000",
  descriptionText:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.  ",
  descriptionTextColor: "#000",
  faIcon: faCircleCheck,
  iconColor: "#008000",
  iconSize: "25px",
};

export const TemplateWithCustomBorder: Story = Template.bind({});
TemplateWithCustomBorder.storyName = "InfoBox With Custom Border";
TemplateWithCustomBorder.args = {
  backgroundColor: "#F5F5F5",
  headingText: "InfoBox Title",
  headingTextColor: "#000",
  descriptionText:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.  ",
  descriptionTextColor: "#000",
  borderColor: "#000",
  borderStyle: "solid",
  borderSize: "1px",
  faIcon: faCircleCheck,
  iconColor: "#008000",
  iconSize: "25px",
};

export const TemplateWithCustomBackground: Story = Template.bind({});
TemplateWithCustomBackground.storyName = "InfoBox With Custom Background";
TemplateWithCustomBackground.args = {
  backgroundColor: "#E40173",
  headingText: "InfoBox Title",
  headingTextColor: "#fff",
  descriptionText:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.  ",
  descriptionTextColor: "#fff",
  faIcon: faCircleInfo,
  iconColor: "#fff",
  iconSize: "25px",
};

export const InfoBoxWithChildren: Story = Template.bind({});
InfoBoxWithChildren.storyName = "InfoBox With Children";
InfoBoxWithChildren.args = {
  headingText: "InfoBox Title",
  headingTextColor: "#000",
  descriptionText:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.  ",
  descriptionTextColor: "#000",
  faIcon: faTriangleExclamation,
  iconColor: "#FF0000",
  iconSize: "25px",
  children: (
    <Text color="#000" marginBottom="xs">
      There are many variations of passages of Lorem Ipsum available, but the
      majority have suffered alteration in some form, by injected humour, or
      randomised words which don't look even slightly believable.
    </Text>
  ),
};
