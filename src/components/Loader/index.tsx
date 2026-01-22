import React from "react";

/**
 *
 * Loaders are used after some user interaction that we assume will take some time to complete. They inform the user that their request is beeing processed and that they should wait.
 */
export function Loader() {
  return (
    <span className="component-loader">
      <p className="screen-reader-only" role="alert">
        Loading
      </p>
      <div className="spinner" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </span>
  );
}

export default Loader;
