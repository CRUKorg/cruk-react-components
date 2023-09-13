import React from "react";
import { StoryObj } from "@storybook/react";

import { Button, Heading, Text } from "..";
import Modal, { ModalProps } from ".";
import AllThemesWrapper from "../AllThemesWrapper";

export default {
  title: "Modal",
  component: Modal,
  args: {},
  tags: ["autodocs"],
};

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
  render: (args) => (
    <AllThemesWrapper>
      <ModalWithTriggerButton {...args} />
    </AllThemesWrapper>
  ),
};
