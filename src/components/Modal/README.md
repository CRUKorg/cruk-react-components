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
  const [showModal, setShowModal] = React.useState(false);
  const toggleShowModal = () => setShowModal(!showModal);

  return (
    <>
      <Button appearance="primary" onClick={toggleShowModal}>Show me a modal</Button>
      {showModal &&
        <Modal closeFunction={toggleShowModal}>
          <Heading h2 marginTop='none' textSize="extraLarge">Modal title</Heading>
          <p>Some really important information</p>
          <Button onClick={toggleShowModal}>Get me out of here</Button>
          <Button appearance="primary" onClick={toggleShowModal}>Go for it 😃</Button>
        </Modal>
      }
    </>
  );
}
```

| Name            | Type     |  Options   | Default | Description                                 |
| :-------------- | :------- | :--------: | :------ | :------------------------------------------ |
| closeFunction   | function |            | null    | (Required) function used to close the modal |
| children        | Any      |            |         | Any content to be displayed in modal        |
| showCloseButton | Boolean  | true/false | true    |
