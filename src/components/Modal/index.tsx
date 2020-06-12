import React, { FC, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider, withTheme } from 'styled-components';
import FocusLock from 'react-focus-lock';

import Box from '../Box';
import Button from '../Button';
import Icon from '../Icon';
import { COLORS } from '../../themes/cruk';

import defaultTheme from '../../themes/cruk';
import { ThemeType } from '../../themes/types';

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

const Content = styled(Box)`
  background: ${COLORS.backgroundLight};
  border-radius: 4px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  margin: ${({
    theme: {
      spacing: { small, extraExtraLarge },
    },
  }) => `calc(${extraExtraLarge} * 2) auto ${small}`};
  width: 90%;
  padding: ${({
    theme: {
      spacing: { extraSmall },
    },
  }) => extraSmall};
  position: relative;
  max-width: 500px;
  z-index: 9999;
`;

const CloseButton = styled(Button)`
  float: right;
  margin-left: ${({
    theme: {
      spacing: { extraSmall },
    },
  }) => extraSmall};
  font-size: 1.2rem;
  padding: 0;
`;

type ModalProps = {
  disableEsc?: Boolean;
  closeButton?: Function | null;
  theme?: ThemeType;
};

const Modal: FC<ModalProps> = props => {
  const { disableEsc, closeButton, children } = props;
  const closeByEsc = (event: KeyboardEvent): void => {
    if (!disableEsc && event.which == 27 && closeButton !== null) {
      closeButton();
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

  if (typeof window === `undefined`) {
    return;
  }

  const theme = {
    ...defaultTheme,
    ...props.theme,
  };

  return ReactDOM.createPortal(
    <FocusLock returnFocus>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Content aria-modal="true" backgroundColor="" css="">
            {closeButton && (
              <CloseButton
                aria-label="close"
                appearance="text"
                onClick={() => {
                  closeButton();
                }}
              >
                <Icon name="close" />
              </CloseButton>
            )}
            {children}
          </Content>
          <Background />
        </Wrapper>
      </ThemeProvider>
    </FocusLock>,
    document.body,
  );
};

Modal.defaultProps = {
  closeButton: null,
  disableEsc: false,
  theme: null,
};

export default withTheme(Modal);
