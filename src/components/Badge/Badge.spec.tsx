import React from "react";

import {
  faPoundSign,
  faSearch,
  faComment,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";

import { testAccessibilityOnAllThemes } from "playwright/utils";

import { Badge } from ".";
import { IconFa } from "..";

function component() {
  return (
    <>
      <Badge>
        <IconFa faIcon={faPoundSign} />
      </Badge>
      <Badge backgroundColor="secondary">
        <IconFa faIcon={faSearch} />
      </Badge>
      <Badge backgroundColor="tertiary">
        <IconFa faIcon={faBullhorn} />
      </Badge>
      <Badge backgroundColor="#8bc34a">2</Badge>
      <Badge
        backgroundColor="textLight"
        textColor="tertiary"
        borderColor="tertiary"
      >
        <IconFa faIcon={faComment} />
      </Badge>
      <Badge>This is text</Badge>
    </>
  );
}

testAccessibilityOnAllThemes({ componentName: "Badge", component });
