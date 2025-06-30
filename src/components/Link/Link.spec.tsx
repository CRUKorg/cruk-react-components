import React from "react";

import { testAccessibilityOnAllThemes } from "playwright/utils";

import { Link } from ".";
import crukTheme from "src/themes/cruk";

function component() {
  return (
    <>
      <div>
        <Link href="https://www.google.com">Default link</Link>
      </div>
      <div>
        <Link href="https://www.google.com" appearance="primary">
          Primary link
        </Link>
      </div>
      <div>
        <Link href="https://www.google.com" appearance="secondary">
          secondary link
        </Link>
      </div>
      <div>
        <Link href="https://www.google.com" target="_blank">
          Link opens new page
        </Link>
      </div>
      <div>
        <Link href="https://www.google.com" rel="noopener noreferrer nofollow">
          External link that that want web crawlers wont follow
        </Link>
      </div>
      <div>
        <Link
          href="https://www.google.com"
          textColor="secondary"
          textHoverColor="#004400"
        >
          Link using different colours
        </Link>
      </div>
      <div>
        <Link href="https://www.google.com" textSize="xl">
          Link with extra large text
        </Link>
      </div>
      <div>
        <Link href="https://www.google.com" aria-label="google homepage">
          <img
            style={{ width: "80px", height: "30px" }}
            alt=""
            src={`${crukTheme.siteConfig.assetPath}images/logos/cruk-160.png`}
          />
        </Link>
      </div>
      <div>
        <Link
          href="#"
          onClick={() => {
            alert("from link");
          }}
        >
          With click handler
        </Link>
      </div>
    </>
  );
}

testAccessibilityOnAllThemes({
  componentName: "Link",
  component,
  ignoreRules: ["color-contrast"], // we know this is an issue with the SU2C theme, but we have new designs that will fix this
});
