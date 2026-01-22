import React, {
  type HTMLAttributes,
  type ReactNode,
  useEffect,
  useRef,
} from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import { IconFa } from "../IconFa";

import Button from "../Button";

/**
 *
 * Use a modal to display content over top of the rest of the site which must be interacted with before the user can continue.
 * ## How modals work
 * - Modals are positioned over everything else in the document and remove scroll from the "body" tag so that modal content scrolls instead.
 * - Modals are unmounted when closed.
 * - Modal's "trap" focus in them, ensuring the keyboard navigation cycles through the modal, and not the rest of the page.
 * ## Accessibility
 * - Once the Modal is appeared on the screen, the focus must be within the Modal container which will enable the screen readers to be able to navigate within the Modal. You may wish to hide the close button so that a user must click on another button to confirm a choice before the modal is closed. However closing with the 'ESC' key must always work, so the props which contains the function that allows the modal to close itself 'closeFunction' is always required.
 */
export function Modal({
  modalName,
  closeFunction,
  startOpen = true,
  showCloseButton,
  children,
  isAnimated = true,
  top,
  maxWidth,
  width,
  ref: outerRef,
  ...htmlAttributes
}: HTMLAttributes<HTMLDialogElement> & {
  /** modal name used for aria-label */
  modalName: string;
  /** callback function called on modal close */
  closeFunction?: () => void;
  /** flag to reveal close button with cross in the top right of modal */
  showCloseButton?: boolean;
  /** set max width of modal */
  maxWidth?: string;
  /** set space from top of view port that modal appears */
  top?: string;
  /** children components  */
  children?: ReactNode;
  /** width of modal */
  width?: string;
  /** turn on animate in modal */
  isAnimated?: boolean;
  /** set if the modal start open */
  startOpen: boolean;
  /** ref to the dialog element */
  ref?: React.RefObject<HTMLDialogElement | null>;
}) {
  const innerRef = useRef<HTMLDialogElement>(null);
  const ref = outerRef ?? innerRef;

  const doClose = React.useCallback((): void => {
    if (!ref.current?.hasAttribute("open")) return;
    console.log("closing modal");
    ref.current?.close();
    if (closeFunction) {
      closeFunction();
    }
  }, [closeFunction, ref]);

  useEffect(() => {
    const closeByEsc = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        doClose();
      }
    };
    if (typeof window === `undefined`) {
      return undefined;
    }
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeByEsc);

    return () => {
      if (typeof window === `undefined`) {
        return;
      }
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", closeByEsc);
    };
  }, [doClose]);

  useEffect(() => {
    if (startOpen && ref && ref.current) {
      ref.current.showModal();
    }
  }, [startOpen, ref]);

  return (
    <>
      <dialog
        ref={ref}
        className={["component-modal", "spacing-props", "colour-props"].join(
          " ",
        )}
        aria-modal="true"
        aria-label={modalName}
        open={false}
        data-is-animated={isAnimated}
        style={{
          maxWidth,
          top,
          width,
        }}
        {...htmlAttributes}
      >
        {showCloseButton || closeFunction ? (
          <Button
            className="component-button close-button"
            aria-label="close"
            appearance="tertiary"
            onClick={() => {
              doClose();
            }}
          >
            <IconFa faIcon={faClose} />
          </Button>
        ) : null}
        {children}
      </dialog>
    </>
  );
}

export default Modal;
