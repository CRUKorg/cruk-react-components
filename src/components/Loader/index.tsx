import React, { FunctionComponent } from 'react';
import styled, { keyframes, ThemeProvider, withTheme } from 'styled-components';

import defaultTheme from '../../themes/cruk';

import { ThemeType } from '../../types';

type LoaderProps = {
  theme?: ThemeType;
};

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
  width: 100%;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.small};

  span {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin: 0 2px;
    background-color: ${({
      theme: {
        colors: { primary },
      },
    }) => primary};
    border-radius: 100%;
    animation: ${BounceDelay} 1.2s infinite ease-in-out both;
  }

  span:nth-child(1) {
    animation-delay: -0.32s;
    -webkit-animation-delay: -0.32s;
  }

  span:nth-child(2) {
    background-color: ${({
      theme: {
        colors: { secondary },
      },
    }) => secondary};
    animation-delay: -0.16s;
  }

  span:nth-child(3) {
    background-color: ${({
      theme: {
        colors: { tertiary },
      },
    }) => tertiary};
  }
`;

const Loader: FunctionComponent<LoaderProps> = props => {
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };
  return (
    <ThemeProvider theme={theme}>
      <Spinner>
        <span />
        <span />
        <span />
      </Spinner>
    </ThemeProvider>
  );
};

export default withTheme(Loader);
