import React from "react";
import Button from "../Button";
import Modal from ".";
import Heading from "../Heading";

export function TestModalWithState() {
  const [showModal, setShowModal] = React.useState(false);
  const toggleShowModal = () => setShowModal(!showModal);

  return (
    <>
      <Button appearance="primary" onClick={toggleShowModal}>
        Show me a modal
      </Button>
      {showModal && (
        <Modal closeFunction={toggleShowModal} showCloseButton modalName="test">
          <Heading h2 marginTop="none" textSize="xl">
            Modal title
          </Heading>
          <p>Some really important information</p>
          <Button onClick={toggleShowModal}>Get me out of here</Button>
          <Button appearance="primary" onClick={toggleShowModal}>
            Go for it 😃
          </Button>
        </Modal>
      )}
    </>
  );
}
