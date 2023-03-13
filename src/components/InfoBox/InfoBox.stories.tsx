import React from "react";
import { Story, Meta } from "@storybook/react";
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
} as Meta<InfoBoxProps>;

const Template: Story<InfoBoxProps> = (args) => <InfoBox {...args} />;

export const InfoBoxDefault: Story<InfoBoxProps> = Template.bind({});
InfoBoxDefault.storyName = "InfoBox";
InfoBoxDefault.args = {
  titleText: "InfoBox Default",
  titleTextColor: "#000",
  descriptionText:
    "This is a description block for the infobox default component",
  descriptionTextColor: "#000",
  icon: <IconFa faIcon={faCircleCheck} color="#008000" size="1.5em" />,
};

export const TemplateWithCustomBackground: Story<InfoBoxProps> = Template.bind(
  {}
);
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

export const InfoBoxWithChildren: Story<InfoBoxProps> = Template.bind({});
InfoBoxWithChildren.storyName = "InfoBox With Children";
InfoBoxWithChildren.args = {
  titleText: "InfoBox With Children",
  titleTextColor: "#000",
  descriptionText: "This is a description block for the infobox with childrens",
  descriptionTextColor: "#000",
  icon: <IconFa faIcon={faTriangleExclamation} color="danger" size="2em" />,
  children: (
    <Text color="#000" marginBottom="xs">
      This is children text block for infobox component
    </Text>
  ),
};

const TemplateWithSU2C: Story<InfoBoxProps> = (args) => (
  <ThemeProvider theme={su2cTheme}>
    <GlobalStyle />
    <InfoBox {...args} />
  </ThemeProvider>
);

export const SU2CInfoBox: Story<InfoBoxProps> = TemplateWithSU2C.bind({});
SU2CInfoBox.storyName = "SU2C InfoBox";
SU2CInfoBox.args = {
  titleText: "InfoBox Default",
  titleTextColor: "#000",
  descriptionText:
    "This is a description block for the infobox default component",
  descriptionTextColor: "#000",
  icon: <IconFa faIcon={faCircleCheck} color="success" size="1.5em" />,
};

const TemplateWithBowelbabe: Story<InfoBoxProps> = (args) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <GlobalStyle />
    <InfoBox {...args} />
  </ThemeProvider>
);

export const BowelbabeInfoBox: Story<InfoBoxProps> = TemplateWithBowelbabe.bind(
  {}
);
BowelbabeInfoBox.storyName = "Bowelbabe InfoBox";
BowelbabeInfoBox.args = {
  titleText: "InfoBox Default",
  titleTextColor: "#000",
  descriptionText:
    "This is a description block for the infobox default component",
  descriptionTextColor: "#000",
  icon: <IconFa faIcon={faCircleCheck} color="success" size="1.5em" />,
};
