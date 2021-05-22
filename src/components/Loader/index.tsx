import React, { FC } from 'react';
import styled, { keyframes, ThemeProvider, useTheme } from 'styled-components';

import defaultTheme from 'src/themes/cruk';

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

const ScreenReaderOnly = styled.p`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

const Spinner = styled.div`
  width: 100%;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.s};

  span {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin: 0 2px;
    background-color: ${({
      theme: {
        colors: { loaderColor1 },
      },
    }) => loaderColor1};
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
        colors: { loaderColor2 },
      },
    }) => loaderColor2};
    animation-delay: -0.16s;
  }

  span:nth-child(3) {
    background-color: ${({
      theme: {
        colors: { loaderColor3 },
      },
    }) => loaderColor3};
  }
`;

const Loader: FC<{}> = () => {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <ScreenReaderOnly role="alert">Loading</ScreenReaderOnly>
        <Spinner>
          <span />
          <span />
          <span />
        </Spinner>
      </>
    </ThemeProvider>
  );
};

export default Loader;
