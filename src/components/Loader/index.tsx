import React, { FC } from 'react';
import { ThemeProvider, useTheme } from 'styled-components';

import defaultTheme from 'src/themes/cruk';

import { ScreenReaderOnly, Spinner } from './styles';

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
