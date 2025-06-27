import React from "react";

import { testAccessibilityOnAllThemes } from "playwright/utils";

import { UserBlock } from ".";
import { crukTheme } from "..";

function component() {
  return (
    <>
      <UserBlock />
      <UserBlock name="Sam Smith" size="s" />
      <UserBlock name="Sam Smith" size="l" />
      <UserBlock
        name="Sam Smith"
        avatarUrl={`${crukTheme.siteConfig.assetPath}images/logos/cruk-160.png`}
        extra="(Managed by My Mum)"
      />
    </>
  );
}

testAccessibilityOnAllThemes({ componentName: "UserBlock", component });
