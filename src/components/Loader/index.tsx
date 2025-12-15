import React from "react";
import styles from "./styles.module.css";

/**
 *
 * Loaders are used after some user interaction that we assume will take some time to complete. They inform the user that their request is beeing processed and that they should wait.
 */
export function Loader() {
  return (
    <>
      <p className={styles["screen-reader-only"]} role="alert">
        Loading
      </p>
      <div className={styles["spinner"]} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </>
  );
}

export default Loader;
