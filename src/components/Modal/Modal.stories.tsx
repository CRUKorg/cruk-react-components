import React from "react";
import { type StoryObj } from "@storybook/react-vite";

import { Button, Heading, Text } from "..";
import Modal from ".";
import "./styles.css";

export default {
  title: "Modal",
  component: Modal,
  args: {},
  argTypes: {
    modalName: { control: "text" },
    showCloseButton: { control: "boolean" },
    isAnimated: { control: "boolean" },
    startOpen: { control: "boolean" },
    width: { control: "text" },
    maxWidth: { control: "text" },
    top: { control: "text" },
  },
  tags: ["autodocs"],
};

const Line = () => (
  <div
    style={{
      width: "100%",
      height: "1px",
      backgroundColor: "#000",
      margin: "1em 0",
    }}
  />
);

type Story = StoryObj<typeof Modal>;

const ModalWithTriggerButton = (args: React.ComponentProps<typeof Modal>) => {
  const modalRef = React.useRef<HTMLDialogElement>(null);

  return (
    <>
      <Button
        appearance="primary"
        onClick={() => modalRef.current?.showModal()}
      >
        Show me a modal
      </Button>

      <Modal
        {...args}
        closeFunction={() => modalRef.current?.close()}
        ref={modalRef}
        startOpen={false}
        showCloseButton={true}
        modalName="test"
      >
        <Heading h2 marginTop="none" textSize="xl">
          Modal title
        </Heading>
        <Text>Some really important information</Text>
        <Button appearance="primary" onClick={() => modalRef.current?.close()}>
          OK
        </Button>
      </Modal>
    </>
  );
};

export const AllThemesWrapper = (args: React.ComponentProps<typeof Modal>) => (
  <main>
    <div tabIndex={0}>
      <div data-theme="cruk">
        <h2>CRUK Theme:</h2>
        <ModalWithTriggerButton {...args} />
        <Line />
      </div>
      <div data-theme="rfl">
        <h2>RFL Theme:</h2>
        <ModalWithTriggerButton {...args} />
        <Line />
      </div>
      <div data-theme="su2c">
        <h2>SU2C Theme:</h2>
        <ModalWithTriggerButton {...args} />
        <Line />
      </div>
      <div data-theme="bowelbabe">
        <h2>Bowelbabe Theme:</h2>
        <ModalWithTriggerButton {...args} />
        <Line />
      </div>
    </div>
  </main>
);

export const ModalDefault: Story = {
  name: "ModalDefault",
  args: {},
  render: (args) => <AllThemesWrapper {...args} />,
};
