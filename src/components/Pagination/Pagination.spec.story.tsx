import React from "react";

import { Pagination } from ".";
import "./styles.css";

export default {};
export const Component = () => (
  <>
    <Pagination
      current={5}
      perPage={10}
      items={59}
      pagerCallback={(n: number) => console.log(n)}
    />
    <Pagination
      current={6}
      perPage={10}
      items={101}
      pagerCallback={(n: number) => console.log(n)}
    />
    <Pagination
      current={1}
      perPage={10}
      items={100}
      pagerCallback={(n: number) => console.log(n)}
    />
    <Pagination
      hideLast
      current={6}
      perPage={7}
      items={70}
      pagerCallback={(n: number) => console.log(n)}
    />
  </>
);

export const CrukTheme = () => (
  <main data-theme="cruk">
    <Component />
  </main>
);

export const RflTheme = () => (
  <main data-theme="rfl">
    <Component />
  </main>
);

export const Su2cTheme = () => (
  <main data-theme="su2c">
    <Component />
  </main>
);

export const BowelbabeTheme = () => (
  <main data-theme="bowelbabe">
    <Component />
  </main>
);
