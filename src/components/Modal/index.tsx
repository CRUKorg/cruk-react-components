import React, { FC, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider, withTheme } from 'styled-components';
import FocusLock from 'react-focus-lock';

import Box from '../Box';
import Button from '../Button';
import Icon from '../Icon';
import { COLORS } from '../../themes/cruk';

import defaultTheme from '../../themes/cruk';
import { ThemeType } from '../../types';

const Background = styled.div`
  background: ${COLORS.modalBackdrop};
  bottom: 0;
  left: 0;
  opacity: 0.5;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.3s, bottom 0s 0.3s;
  z-index: 100;
`;

const Wrapper = styled.div`
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
`;

type ContentProps = {
  maxWidth: string;
  top: string;
};

const Content = styled(Box)<ContentProps>`
  background: ${COLORS.backgroundLight};
  position: relative;
  border-radius: 4px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  margin: ${({ top }) => `${top} auto auto auto`};
  width: 90%;
  min-height: 10rem;
  padding: ${({
    theme: {
      spacing: { xs },
    },
  }) => xs};
  max-width: ${({ maxWidth }) => maxWidth};
  z-index: 9999;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const CloseButton = styled(Button)`
  float: right;
  margin-left: ${({
    theme: {
      spacing: { xs },
    },
  }) => xs};
  font-size: 1.2rem;
  padding: 0;
`;

type ModalProps = {
  showCloseButton?: Boolean;
  closeFunction: Function;
  maxWidth?: string;
  top?: string;
  theme?: ThemeType;
};

const Modal: FC<ModalProps> = props => {
  const { showCloseButton, closeFunction, maxWidth = '500px', top = '1rem', children } = props;
  const closeByEsc = (event: KeyboardEvent): void => {
    if (event.which == 27 && !!closeFunction) {
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

  const theme = {
    ...defaultTheme,
    ...props.theme,
  };

  return (
    <>
      {typeof window !== `undefined`
        ? ReactDOM.createPortal(
            <section role="dialog">
              <FocusLock returnFocus>
                <ThemeProvider theme={theme}>
                  <Wrapper aria-modal="true">
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
  theme: defaultTheme,
};

export default withTheme(Modal);
