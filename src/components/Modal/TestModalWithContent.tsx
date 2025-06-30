import React from "react";

import Modal from ".";
import { Button, Heading } from "..";

export function TestModalWithContent() {
  return (
    <>
      <Modal
        closeFunction={() => {
          // nothing
        }}
        showCloseButton
        modalName="test"
      >
        <Heading h2 marginTop="none" textSize="xl">
          Modal title
        </Heading>
        <p>Some really important information</p>
        <Button
          onClick={() => {
            // nothing
          }}
        >
          Get me out of here
        </Button>
        <Button
          appearance="primary"
          onClick={() => {
            // nothing
          }}
        >
          Go for it 😃
        </Button>
      </Modal>
    </>
  );
}
