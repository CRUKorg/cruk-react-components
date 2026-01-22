import React from "react";

import { testAccessibilityOnAllThemes } from "playwright/utils";

import { Text } from "..";
import { ProgressBar } from ".";
import "./styles.css";

function component() {
  return (
    <>
      <ProgressBar percentage={0} />
      <ProgressBar percentage={20} />
      <ProgressBar percentage={150} />
      <ProgressBar percentage={0} isCircular />
      <ProgressBar percentage={20} isCircular />
      <ProgressBar percentage={150} isCircular />
      <ProgressBar
        percentage={60}
        isCircular
        circleSize="10em"
        circleContents={<Text>60 / 100 miles</Text>}
      />
    </>
  );
}

testAccessibilityOnAllThemes({ componentName: "ProgressBar", component });
