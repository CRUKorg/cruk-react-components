import React, { FC } from "react";
import { ThemeProvider, useTheme } from "styled-components";

import defaultTheme from "../../themes/cruk";

import { ScreenReaderOnly, Spinner } from "./styles";

/**
 *
 * Loaders are used after some user interaction that we assume will take some time to complete. They inform the user that their request is beeing processed and that they should wait.
 */
const Loader: FC = () => {
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
