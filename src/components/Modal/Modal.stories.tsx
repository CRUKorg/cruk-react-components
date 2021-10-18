import React from "react";
import { Story, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { su2cTheme, Button, Heading, Text, GlobalStyle } from "..";
import Modal, { ModalProps } from ".";

export default {
  title: "Modal",
  component: Modal,
} as Meta<ModalProps>;

const Template: Story<ModalProps> = (args) => {
  const [showModal, setShowModal] = React.useState(true);
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

export const ModalDefault: Story<ModalProps> = Template.bind({});
ModalDefault.storyName = "Modal";
ModalDefault.args = {};

const TemplateWithSU2C: Story<ModalProps> = (args) => {
  const [showModal, setShowModal] = React.useState(false);
  const toggleShowModal = () => setShowModal(!showModal);

  return (
    <>
      <ThemeProvider theme={su2cTheme}>
        <GlobalStyle />
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
      </ThemeProvider>
    </>
  );
};

export const SU2CModal: Story<ModalProps> = TemplateWithSU2C.bind({});
SU2CModal.storyName = "SU2C Modal";
SU2CModal.args = {};
