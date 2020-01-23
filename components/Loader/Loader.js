// @Flow

import React from 'react';
import styled, { keyframes, ThemeProvider, withTheme } from 'styled-components';
import { COLORS } from '../Constants';

type LoaderProps = {
  theme: { colors: {} },
};

const SpinnerWrapper = styled.div`
  position: static;
  top: 0;
  left: 50%;
  margin-left: -35px;
`;
const BounceDelay = keyframes`
  0%,
  80%,
  100% {
      transform: scale(0)
  }
  40% {
      transform: scale(1)
  }
`;
const Spinner = styled.div`
  width: 70px;
  margin: 22px auto;
  text-align: center;
  
  span {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin: 0 2px;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 100%;
    animation: ${BounceDelay} 1.2s infinite ease-in-out both;
  }
  
  span:nth-child(1) {
    animation-delay: -0.32s;
    -webkit-animation-delay: -0.32s
  }
  
  span:nth-child(2) {
    background-color: ${props => props.theme.colors.secondary};
    animation-delay: -0.16s;
  }
  
  span:nth-child(3) {
    background-color: ${props => props.theme.colors.tertiary};
  }
`;

const Loader = (props: LoaderProps) => {
  const theme = {
    colors: {
      ...COLORS,
      ...props.theme.colors,
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <SpinnerWrapper {...props}>
        <Spinner>
          <span />
          <span />
          <span />
        </Spinner>
        {props.children}
      </SpinnerWrapper>
    </ThemeProvider>
  );
};

export default withTheme(Loader);
