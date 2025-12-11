import React from "react";

import { testAccessibilityOnAllThemes } from "playwright/utils";
import { Avatar } from ".";

function component() {
  return (
    <>
      <Avatar />
      <Avatar name="Sam" size="s" alt="sam's profile" />
      <Avatar name="Sam" size="m" alt="sam's profile" />
      <Avatar name="Sam" size="l" alt="sam's profile" />
      <Avatar name="Sam" size="xl" alt="sam's profile" />
      <Avatar
        name="Sam"
        alt="sam's profile"
        url={`https://rcl.assets.cancerresearchuk.org/images/logos/cruk-160.png`}
      />
    </>
  );
}

testAccessibilityOnAllThemes({ componentName: "Avatar", component });
