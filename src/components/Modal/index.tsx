import React, { FC, useEffect } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, useTheme } from "styled-components";
import FocusLock from "react-focus-lock";

import Icon from "src/components/Icon";
import defaultTheme from "src/themes/cruk";

import { CloseButton, Wrapper, Content, Background } from "./styles";

export type ModalProps = {
  /** modal name used for aria-label */
  modalName: string;
  /** callback function called on modal close */
  closeFunction: () => void;
  /** flag to reveal close button with cross in the top right of modal */
  showCloseButton?: boolean;
  /** set max width of modal */
  maxWidth?: string;
  /** set space from top of view port that modal appears */
  top?: string;
  /** background color of dialogue */
  backgroundColor?: string;
};

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
const Modal: FC<ModalProps> = ({
  modalName,
  closeFunction,
  showCloseButton,
  maxWidth = "500px",
  top = "1rem",
  backgroundColor = "backgroundLight",
  children,
}) => {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };
  const closeByEsc = (event: KeyboardEvent): void => {
    if (event.key === "Escape" && !!closeFunction) {
      closeFunction();
    }
  };

  useEffect(() => {
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
  }, []);

  return (
    <>
      {typeof window !== `undefined`
        ? ReactDOM.createPortal(
            <section>
              <FocusLock returnFocus>
                <ThemeProvider theme={theme}>
                  <Wrapper
                    role="dialog"
                    aria-modal="true"
                    aria-label={modalName}
                  >
                    <Content
                      backgroundColor={backgroundColor}
                      maxWidth={maxWidth}
                      top={top}
                    >
                      {showCloseButton && closeFunction ? (
                        <CloseButton
                          aria-label="close"
                          appearance="tertiary"
                          onClick={() => {
                            closeFunction();
                          }}
                        >
                          <Icon name="close" />
                        </CloseButton>
                      ) : null}
                      {children}
                    </Content>
                    <Background />
                  </Wrapper>
                </ThemeProvider>
              </FocusLock>
            </section>,
            document.body
          )
        : null}
    </>
  );
};

export default Modal;
