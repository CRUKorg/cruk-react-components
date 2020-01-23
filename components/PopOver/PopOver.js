// @Flow

import React, { useState } from 'react';
import styled, { css, ThemeProvider, withTheme } from 'styled-components';
import {BREAKPOINT, COLORS, TYPOGRAPHY, UTILITIES} from '../Constants';

type PopOverProps = {
  theme: { colors: {} },
  position: string,
  overlay: any,
};

const PopOverWrapper = styled.div`
  position: relative;
  display: inline-block;
  ${props => css([props.css])}
`;
const PopOverContent = styled.div`
  display: flex;
  justify-content: space-around;
  padding: ${UTILITIES.spacingUnit}px;
  position: absolute;
  bottom: 100%;
  left: 0;
  z-index: 9999;
  max-width: 276px;
  font-size: ${TYPOGRAPHY.fontSizeSmall};
  word-wrap: break-word;
  background-color: ${COLORS.white};
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.25);
  border-radius: ${UTILITIES.borderRadius};
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);  
  margin-bottom: 10px;
  
  &:after,
  &:before {
    content: "";
    border-style: solid;
    border-width: 10px;
    width: 0;
    height: 0;
    position:absolute;
    top: 100%;
    left: calc(50% - 10px);
  }
  &:before {
    border-color: rgba(0,0,0,.25) transparent transparent;
  }
  &:after {
    margin-top: -1px;
    border-color: ${COLORS.white} transparent transparent ;
  }
`;

const PopOver = (props: PopOverProps) => {
  const [showPopOver, setPopOver] = useState(false);
  const toggle = () => setPopOver(!showPopOver);
  const theme = {
    colors: {
      ...COLORS,
      ...props.theme.colors,
    },
  };
  const StyledPopOverContent = styled(PopOverContent)`
    ${props.position === 'bottom' && css` margin-top: 10px; `}
    ${((props.position === 'bottom') || (props.position === 'left') || (props.position === 'right')) && css`
      bottom: unset; left: unset; top: 100%;  margin-bottom: 0; 
      &:after, &:before { bottom: 100%; top: unset; }
      &:before { border-color: transparent transparent rgba(0,0,0,.25); }
      &:after { border-color: transparent transparent ${COLORS.white}; margin: 0 0 -1px 0; }
    `}
    @media (min-width: ${BREAKPOINT.desktop}) {
      ${props.position === 'right' && css`
        bottom: unset; left: 100%; right: unset; top: 0; margin-bottom: 0; margin-left: 10px;
        &:after, &:before { bottom: unset; left: -20px; top: calc(50% - 10px); }
        &:before { border-color: transparent rgba(0,0,0,.25) transparent transparent; }
        &:after { border-color: transparent ${COLORS.white} transparent transparent; margin: 0 0 0 1px; }
      `}
      ${props.position === 'left' && css`
        top: unset; bottom: unset; left: unset; right: 100%; top: 0; margin-bottom: 0; margin-right: 10px;
        &:after, &:before { bottom: unset; left: 100%; top: calc(50% - 10px); }
        &:before { border-color: transparent transparent transparent rgba(0,0,0,.25); }
        &:after { border-color: transparent transparent transparent ${COLORS.white}; margin: 0 0 0 -1px; }
      `}
    } 
  `;
  return (
    <ThemeProvider theme={theme}>
      <PopOverWrapper {...props}>
        {showPopOver && (
          <StyledPopOverContent
            role="dialog"
            aria-modal={showPopOver}
          >
            {props.overlay}
          </StyledPopOverContent>
        )}
        {React.Children.map(props.children, child => React.cloneElement(
          child,
          {
            onClick: toggle,
            'aria-expanded': showPopOver,
            'aria-haspopup': 'dialog',
          },
        ))}
      </PopOverWrapper>
    </ThemeProvider>
  );
};

export default withTheme(PopOver);
