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
import "./styles.css";

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
      <Badge backgroundColor="success">2</Badge>
      <Badge
        backgroundColor="text-light"
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
