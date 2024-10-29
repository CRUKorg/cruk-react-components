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
        <Modal closeFunction={toggleShowModal} modalName="test">
          <Heading h2 marginTop='none' textSize="xl">Modal title</Heading>
          <p>Some really important information</p>
          <Button appearance="primary" onClick={toggleShowModal}>OK</Button>
        </Modal>
      }
    </>
  );
}
```

| Name              | Type      | Default | Description                                                                                     |
| :---------------- | :-------- | :------ | :---------------------------------------------------------------------------------------------- |
| closeFunction     | function  | null    | (Required) function used to close the modal on escape key press and close or close button press |
| maxWidth          | string    | 500px   | Max width of modal                                                                              |
| width             | string    | 500px   | width of modal                                                                                  |
| top               | string    | 1rem    | Height from top of container                                                                    |
| children          | Any       |         | Any content to be displayed in modal                                                            |
| showCloseButton   | Boolean   | true    | Toggles visibility of modal close button                                                        |
| margin            | SpaceType | unset   | margin top, bottom, left and right                                                              |
| marginVertical    | SpaceType | unset   | margin top and bottom                                                                           |
| marginHorizontal  | SpaceType | unset   | margin left and right                                                                           |
| marginTop         | SpaceType | unset   | margin top                                                                                      |
| marginRight       | SpaceType | unset   | margin right right                                                                              |
| marginBottom      | SpaceType | 'xs'    | margin bottom bottom                                                                            |
| marginLeft        | SpaceType | unset   | margin left left                                                                                |
| padding           | SpaceType | unset   | padding top, bottom, left and right                                                             |
| paddingVertical   | SpaceType | unset   | padding top and bottom                                                                          |
| paddingHorizontal | SpaceType | unset   | padding left and right                                                                          |
| paddingTop        | SpaceType | unset   | padding top                                                                                     |
| paddingRight      | SpaceType | unset   | padding right right                                                                             |
| paddingBottom     | SpaceType | unset   | padding bottom bottom                                                                           |
| paddingLeft       | SpaceType | unset   | padding left left                                                                               |
| isAnimated        | Boolean   | unset   | turns on animate in of modal                                                                    |

## Accessibility

When it comes to modal dialogs, consider this: no one likes to be interrupted, but if you must, make sure it’s worth the cost.

Use modal dialogs for important warnings, as a way to prevent or correct critical errors.
Use modal dialogs to request the user to enter information critical to continuing the current process.
Modal dialogs can be used to fragment a complex workflow into simpler steps.
Do not use modal dialogs for nonessential information that is not related to the current user flow.
