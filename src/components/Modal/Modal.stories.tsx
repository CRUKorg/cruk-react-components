import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import {
  su2cTheme,
  Button,
  Heading,
  Text,
  GlobalStyle,
  bowelbabeTheme,
} from "..";
import Modal, { ModalProps } from ".";

export default {
  title: "Modal",
  component: Modal,
  args: {},
  tags: ["autodocs"],
} as Meta<ModalProps>;

type Story = StoryObj<typeof Modal>;

const ModalWithTriggerButton = (args: ModalProps) => {
  const [showModal, setShowModal] = React.useState(false);
  const toggleShowModal = () => setShowModal(!showModal);

  return (
    <>
      <Button appearance="primary" onClick={toggleShowModal}>
        Show me a modal
      </Button>
      {showModal && (
        <Modal {...args} closeFunction={toggleShowModal}>
          <Heading h2 marginTop="none" textSize="xl">
            Modal title
          </Heading>
          <Text>Some really important information</Text>
          <Button appearance="primary" onClick={toggleShowModal}>
            OK
          </Button>
        </Modal>
      )}
    </>
  );
};

export const ModalDefault: Story = {
  name: "ModalDefault",
  args: {},
  render: ModalWithTriggerButton,
};

/// SU2C

const su2cRender = (args: ModalProps) => (
  <ThemeProvider theme={su2cTheme}>
    <GlobalStyle />
    <ModalWithTriggerButton {...args} />
  </ThemeProvider>
);

export const ModalSU2C: Story = {
  name: "ModalSU2C",
  args: {},
  render: su2cRender,
};

/// Bowelbabe

const bowelbabeRender = (args: ModalProps) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <GlobalStyle />
    <ModalWithTriggerButton {...args} />
  </ThemeProvider>
);

export const ModalBowelbabe: Story = {
  name: "ModalBowelbabe",
  args: {},
  render: bowelbabeRender,
};
