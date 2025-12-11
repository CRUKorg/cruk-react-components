import React from "react";

import { testAccessibilityOnAllThemes } from "playwright/utils";

import { UserBlock } from ".";

function component() {
  return (
    <>
      <UserBlock />
      <UserBlock name="Sam Smith" size="s" />
      <UserBlock name="Sam Smith" size="l" />
      <UserBlock
        name="Sam Smith"
        avatarUrl={`https://rcl.assets.cancerresearchuk.org/images/logos/cruk-160.png`}
        extra="(Managed by My Mum)"
      />
    </>
  );
}

testAccessibilityOnAllThemes({ componentName: "UserBlock", component });
