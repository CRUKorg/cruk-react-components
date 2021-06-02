import React, { FC, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, useTheme } from 'styled-components';
import FocusLock from 'react-focus-lock';

import Icon from 'src/components/Icon';
import defaultTheme from 'src/themes/cruk';

import { CloseButton, Wrapper, Content, Background } from './styles';

type Props = {
  modalName: string;
  closeFunction: Function;
  showCloseButton?: Boolean;
  maxWidth?: string;
  top?: string;
};

const Modal: FC<Props> = ({
  modalName,
  closeFunction,
  showCloseButton,
  maxWidth = '500px',
  top = '1rem',
  children,
}) => {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };
  const closeByEsc = (event: KeyboardEvent): void => {
    if (event.key === 'Escape' && !!closeFunction) {
      closeFunction();
    }
  };

  useEffect(() => {
    if (typeof window === `undefined`) {
      return;
    }
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', closeByEsc);

    return () => {
      if (typeof window === `undefined`) {
        return;
      }
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', closeByEsc);
    };
  }, []);

  return (
    <>
      {typeof window !== `undefined`
        ? ReactDOM.createPortal(
            <section>
              <FocusLock returnFocus>
                <ThemeProvider theme={theme}>
                  <Wrapper role="dialog" aria-modal="true" aria-label={modalName}>
                    <Content backgroundColor="" maxWidth={maxWidth} top={top}>
                      {showCloseButton && closeFunction ? (
                        <CloseButton
                          aria-label="close"
                          appearance="text"
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
            document.body,
          )
        : null}
    </>
  );
};

Modal.defaultProps = {
  closeFunction: undefined,
  showCloseButton: true,
};

export default Modal;
