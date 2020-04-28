import React, { useState, FunctionComponent, useRef } from 'react';
import styled, { css, ThemeProvider, withTheme } from 'styled-components';

import useLayoutEffectSSR from '../../hooks/useLayoutEffectSSR';
import defaultTheme, { BREAKPOINT, COLORS } from '../../themes/cruk';
import { ThemeType } from '../../themes/types';

type PopOverProps = {
  position: string;
  overlay: any;
  css: string;
  theme?: ThemeType;
};

type StyledPopOverContentType = {
  position: string;
  theme?: ThemeType;
};

type PopOverWrapperProps = {
  css: string;
};

const PopOverWrapper = styled.div<PopOverWrapperProps>`
  position: relative;
  display: inline-block;
  ${props => (css as any)([props.css])}
`;

const PopOverContent = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  word-wrap: break-word;
  padding: ${({
    theme: {
      spacing: { extraExtraSmall },
    },
  }) => extraExtraSmall};
  bottom: 100%;
  left: 0;
  z-index: 9999;
  max-width: 276px;
  font-size: ${({
    theme: {
      fontSizes: { small },
    },
  }) => small};
  background-color: ${({
    theme: {
      colors: { popoverBackground },
    },
  }) => popoverBackground};
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: ${({
    theme: {
      utilities: { borderRadius },
    },
  }) => borderRadius};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;

  &:after,
  &:before {
    content: '';
    border-style: solid;
    border-width: 10px;
    width: 0;
    height: 0;
    position: absolute;
    top: 100%;
    left: calc(50% - 10px);
  }
  &:before {
    border-color: rgba(0, 0, 0, 0.25) transparent transparent;
  }
  &:after {
    margin-top: -1px;
    border-color: ${COLORS.popoverBackground} transparent transparent;
  }
`;

const StyledPopOverContent = styled(PopOverContent)<StyledPopOverContentType>`
    ${({ position }: StyledPopOverContentType) =>
      position === 'bottom' &&
      css`
        margin-top: 10px;
      `}

    ${({ theme, position }: StyledPopOverContentType) =>
      (position === 'bottom' || position === 'left' || position === 'right') &&
      css`
        bottom: unset;
        left: unset;
        top: 100%;
        margin-bottom: 0;
        &:after,
        &:before {
          bottom: 100%;
          top: unset;
        }
        &:before {
          border-color: transparent transparent rgba(0, 0, 0, 0.25);
        }
        &:after {
          border-color: transparent transparent ${theme.colors.popoverBackground};
          margin: 0 0 -1px 0;
        }
      `}
    @media (min-width: ${BREAKPOINT.desktop}) {
      ${({ theme, position }: StyledPopOverContentType) =>
        position === 'right' &&
        css`
          bottom: unset;
          left: 100%;
          right: unset;
          top: 0;
          margin-bottom: 0;
          margin-left: 10px;
          &:after,
          &:before {
            bottom: unset;
            left: -20px;
            top: calc(50% - 10px);
          }
          &:before {
            border-color: transparent rgba(0, 0, 0, 0.25) transparent transparent;
          }
          &:after {
            border-color: transparent ${theme.colors.popoverBackground} transparent transparent;
            margin: 0 0 0 1px;
          }
        `}
      ${({ position, theme }: StyledPopOverContentType) =>
        position === 'left' &&
        css`
          top: unset;
          bottom: unset;
          left: unset;
          right: 100%;
          top: 0;
          margin-bottom: 0;
          margin-right: 10px;
          &:after,
          &:before {
            bottom: unset;
            left: 100%;
            top: calc(50% - 10px);
          }
          &:before {
            border-color: transparent transparent transparent rgba(0, 0, 0, 0.25);
          }
          &:after {
            border-color: transparent transparent transparent ${theme.colors.popoverBackground};
            margin: 0 0 0 -1px;
          }
        `}
    } 
  `;

const PopOver: FunctionComponent<PopOverProps> = props => {
  const popRef = useRef(null);
  const [showPopOver, setPopOver] = useState(false);
  const toggle = () => setPopOver(!showPopOver);
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };

  // outside click closes popover
  const closePopOver = (e: MouseEvent) => {
    console.log(e.target);
    const isDescendantOfRoot = popRef && popRef.current && popRef.current.contains(e.target);
    if (!isDescendantOfRoot) {
      setPopOver(false);
    }
  };
  useLayoutEffectSSR(() => {
    document.addEventListener('click', closePopOver, true);
    return () => {
      document.removeEventListener('click', closePopOver, true);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <PopOverWrapper {...props} ref={popRef}>
        {showPopOver && (
          <StyledPopOverContent position={props.position} theme={theme} role="dialog" aria-modal={showPopOver}>
            {props.overlay}
          </StyledPopOverContent>
        )}
        {React.Children.map(props.children, (child: React.ReactElement) =>
          React.cloneElement(child, {
            onClick: toggle,
            'aria-expanded': showPopOver,
            'aria-haspopup': 'dialog',
          }),
        )}
      </PopOverWrapper>
    </ThemeProvider>
  );
};

export default withTheme(PopOver);
