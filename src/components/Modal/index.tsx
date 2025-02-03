import React, { type ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { ThemeProvider, useTheme } from "styled-components";
import FocusLock from "react-focus-lock";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import { IconFa } from "../IconFa";
import { crukTheme as defaultTheme } from "../../themes/cruk";

import { CloseButton, Wrapper, Content, Background } from "./styles";

import { type SpacingProps } from "../Spacing";

export type ModalProps = SpacingProps & {
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
  /** children components  */
  children?: ReactNode;
  /** width of modal */
  width?: string;
  /** turn on animate in modal */
  isAnimated?: boolean;
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
export function Modal({
  modalName,
  closeFunction,
  showCloseButton,
  maxWidth = "500px",
  top = "1rem",
  backgroundColor = "backgroundLight",
  children,
  width = "90%",
  margin,
  marginHorizontal,
  marginVertical,
  marginTop,
  marginRight,
  marginBottom = "xxl",
  marginLeft,
  padding = "xs",
  paddingHorizontal,
  paddingVertical,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  isAnimated = true,
}: ModalProps) {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };
  const closeByEsc = React.useCallback(
    (event: KeyboardEvent): void => {
      if (event.key === "Escape" && !!closeFunction) {
        closeFunction();
      }
    },
    [closeFunction],
  );

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
  }, [closeByEsc]);

  return (
    <>
      {typeof window !== `undefined`
        ? createPortal(
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
                      $maxWidth={maxWidth}
                      $width={width}
                      $top={top}
                      margin={margin}
                      marginHorizontal={marginHorizontal}
                      marginVertical={marginVertical}
                      marginTop={marginTop}
                      marginRight={marginRight}
                      marginBottom={marginBottom}
                      marginLeft={marginLeft}
                      padding={padding}
                      paddingHorizontal={paddingHorizontal}
                      paddingVertical={paddingVertical}
                      paddingTop={paddingTop}
                      paddingRight={paddingRight}
                      paddingBottom={paddingBottom}
                      paddingLeft={paddingLeft}
                      $isAnimated={isAnimated}
                    >
                      {showCloseButton && closeFunction ? (
                        <CloseButton
                          aria-label="close"
                          appearance="tertiary"
                          onClick={() => {
                            closeFunction();
                          }}
                        >
                          <IconFa faIcon={faClose} />
                        </CloseButton>
                      ) : null}
                      {children}
                    </Content>
                    <Background $isAnimated={isAnimated} />
                  </Wrapper>
                </ThemeProvider>
              </FocusLock>
            </section>,
            document.body,
          )
        : null}
    </>
  );
}

export default Modal;
