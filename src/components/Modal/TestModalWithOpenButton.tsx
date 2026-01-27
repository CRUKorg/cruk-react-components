import React from "react";
import Button from "../Button";
import Modal from ".";
import Heading from "../Heading";
import "./styles.css";

export function TestModalWithOpenButton() {
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
        ref={modalRef}
        closeFunction={() => modalRef.current?.close()}
        showCloseButton
        modalName="test"
        startOpen={false}
      >
        <Heading h2 marginTop="none" textSize="xl">
          Modal title
        </Heading>
        <p>Some really important information</p>
        <Button onClick={() => modalRef.current?.close()}>
          Get me out of here
        </Button>
        <Button appearance="primary" onClick={() => modalRef.current?.close()}>
          Go for it 😃
        </Button>
      </Modal>
    </>
  );
}
