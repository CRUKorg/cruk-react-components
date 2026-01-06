import React from "react";

import { testAccessibilityOnAllThemes } from "playwright/utils";

import { Pagination } from ".";
import "./styles.css";

function component() {
  return (
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
}

testAccessibilityOnAllThemes({ componentName: "Pagination", component });
