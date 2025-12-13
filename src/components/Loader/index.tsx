import React from "react";

import { ScreenReaderOnly, Spinner } from "./styles";

/**
 *
 * Loaders are used after some user interaction that we assume will take some time to complete. They inform the user that their request is beeing processed and that they should wait.
 */
export function Loader() {
  return (
    <>
      <ScreenReaderOnly role="alert">Loading</ScreenReaderOnly>
      <Spinner>
        <span />
        <span />
        <span />
      </Spinner>
    </>
  );
}

export default Loader;
