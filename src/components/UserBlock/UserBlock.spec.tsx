import React from "react";

import { testAccessibilityOnAllThemes } from "playwright/utils";

import { UserBlock } from ".";
import "./styles.css";
import "../Text/styles.css";
import "../Box/styles.css";
import "../IconFa/styles.css";
import "../Avatar/styles.css";

function component() {
  return (
    <>
      <UserBlock themeName="cruk" />
      <UserBlock name="Sam Smith" size="s" themeName="cruk" />
      <UserBlock name="Sam Smith" size="l" themeName="cruk" />
      <UserBlock
        name="Sam Smith"
        avatarUrl={`https://rcl.assets.cancerresearchuk.org/images/logos/cruk-160.png`}
        extra="(Managed by My Mum)"
        themeName="cruk"
      />
    </>
  );
}

testAccessibilityOnAllThemes({ componentName: "UserBlock", component });
