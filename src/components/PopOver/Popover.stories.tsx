import React from "react";
import { type StoryObj } from "@storybook/react-vite";
import {
  faShareAlt,
  faEnvelopeSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookMessenger,
  faFacebookSquare,
  faTwitterSquare,
  faWhatsappSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { Box, Button, IconFa } from "..";
import AllThemesWrapper from "../AllThemesWrapper";
import PopOver, { type PopOverProps } from ".";
import "./styles.css";

export default {
  title: "PopOver (experimental)",
  component: PopOver,
  args: {
    modalLabel: "sharing options",
    minWidth: "23em",
    modalContent: (
      <Box padding="xxs">
        <Button appearance="tertiary" aria-label="Facebook">
          <IconFa faIcon={faFacebookSquare} color="#4267b2" size="1.5rem" />
        </Button>
        <Button appearance="tertiary" aria-label="Twitter">
          <IconFa faIcon={faTwitterSquare} color="#1da1f2" size="1.5rem" />
        </Button>
        <Button appearance="tertiary" aria-label="WhatsApp">
          <IconFa faIcon={faWhatsappSquare} color="#4dc247" size="1.5rem" />
        </Button>
        <Button appearance="tertiary" aria-label="Facebook Messenger">
          <IconFa faIcon={faFacebookMessenger} color="#288ef8" size="1.5rem" />
        </Button>
        <Button appearance="tertiary" aria-label="LinkedIn">
          <IconFa faIcon={faLinkedin} color="#0077b5" size="1.5rem" />
        </Button>
        <Button appearance="tertiary" aria-label="Email">
          <IconFa faIcon={faEnvelopeSquare} color="#00b6ed" size="1.5rem" />
        </Button>
      </Box>
    ),
    children: (
      <Button>
        <IconFa faIcon={faShareAlt} />
        Share top
      </Button>
    ),
  },
  argTypes: {
    position: {
      control: "select",
      options: ["top", "left", "right", "bottom", ""],
    },
    full: { control: "boolean" },
    minWidth: { control: "text" },
    maxWidth: { control: "text" },
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof PopOver>;

const PopOverInBox = (args: PopOverProps) => (
  <Box margin="xxl">
    <PopOver {...args} />
  </Box>
);

export const PopOverDefault: Story = {
  name: "PopOverDefault",
  args: {},
  render: (args) => (
    <AllThemesWrapper>
      <PopOverInBox {...args} />
    </AllThemesWrapper>
  ),
};
