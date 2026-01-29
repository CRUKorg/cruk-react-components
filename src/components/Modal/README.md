# Modal

Use a modal to display content over top of the rest of the site which must be interacted with before the user can continue.

## How modals work

- Modals are positioned over everything else in the document and remove scroll from the "body" tag so that modal content scrolls instead.
- Modals are unmounted when closed.
- Modal's "trap" focus in them, ensuring the keyboard navigation cycles through the modal, and not the rest of the page.

## Accessibility

- Once the Modal is appeared on the screen, the focus must be within the Modal container which will enable the screen readers to be able to navigate within the Modal. You may wish to hide the close button so that a user must click on another button to confirm a choice before the modal is closed. However closing with the 'ESC' key must always work, so the props which contains the function that allows the modal to close itself 'closeFunction' is always required.

### Try it out

```.jsx
function () {
 const modalRef = React.useRef<HTMLDialogElement>(null);
 const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <Button appearance="primary" onClick={() => setShowModal(true)}>Show me a modal</Button>
      {showModal &&
        <Modal
          closeFunction={() => setShowModal(false)}
          modalName="test"
          startOpen={true}
          showCloseButton={true}
          ref={modalRef}
        >
          <Heading h2 marginTop='none' textSize="xl">Modal title</Heading>
          <p>Some really important information</p>
          <Button appearance="primary" onClick={() => setShowModal(false)}>OK</Button>
        </Modal>
      }
    </>
  );
}
```

## Props

| Name              | Type                               | Default   | Description                                                                                            |
| :---------------- | :--------------------------------- | :-------- | :----------------------------------------------------------------------------------------------------- |
| modalName         | string                             | required  | Modal name used for aria-label accessibility                                                           |
| startOpen         | boolean                            | true      | Set if the modal starts open when rendered                                                             |
| closeFunction     | function                           | undefined | Callback function called on modal close (triggered by Escape key or close button)                      |
| showCloseButton   | boolean                            | undefined | Flag to reveal close button with cross in the top right of modal                                       |
| isAnimated        | boolean                            | true      | Turn on animate in modal                                                                               |
| children          | ReactNode                          | undefined | Children components inside modal                                                                       |
| ref               | React.RefObject<HTMLDialogElement> | undefined | Ref to the dialog element - use to programmatically control modal with ref.showModal() and ref.close() |
| style             | React.CSSProperties                | undefined | Additional style attributes for the dialog element                                                     |
| ...htmlAttributes | HTMLAttributes<HTMLDialogElement>  | undefined | All other standard HTML dialog element attributes are supported                                        |

## Accessibility

When it comes to modal dialogs, consider this: no one likes to be interrupted, but if you must, make sure it’s worth the cost.

Use modal dialogs for important warnings, as a way to prevent or correct critical errors.
Use modal dialogs to request the user to enter information critical to continuing the current process.
Modal dialogs can be used to fragment a complex workflow into simpler steps.
Do not use modal dialogs for nonessential information that is not related to the current user flow.
