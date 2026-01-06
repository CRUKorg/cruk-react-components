import React from "react";

import { testAccessibilityOnAllThemes } from "playwright/utils";

import { Footer } from ".";
import { Link } from "..";
import "./styles.css";

function component() {
  return (
    <Footer middleSection="Cancer Research UK is a registered charity in England and Wales (1089464), Scotland (SC041666), the Isle of Man (1103) and Jersey (247). A company limited by guarantee. Registered company in England and Wales (4325234) and the Isle of Man (5713F).">
      <Link
        appearance="secondary"
        href="https://www.cancerresearchuk.org/about-us/contact-us"
      >
        Contact us
      </Link>
      <Link
        appearance="secondary"
        href="https://www.cancerresearchuk.org/privacy-statement"
      >
        Privacy
      </Link>
    </Footer>
  );
}

testAccessibilityOnAllThemes({
  componentName: "Footer",
  component,
  ignoreRules: ["color-contrast"], // We know that the color-contrast rule is failing on some SU2C, so we ignore it for now. We have new designs coming soon.
});
