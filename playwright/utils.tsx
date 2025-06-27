import { test, expect } from "@playwright/experimental-ct-react";
import { AxeBuilder } from "@axe-core/playwright";
import { ThemeProvider } from "styled-components";
import React from "react";

import crukTheme from "../src/themes/cruk";
import su2cTheme from "../src/themes/su2c";
import rflTheme from "../src/themes/rfl";
import bowelbabeTheme from "../src/themes/bowelbabe";
import { GlobalStyle, type ThemeType } from "src/components";

type themeNameType = "CRUK" | "SU2C" | "RFL" | "Bowelbabe";
export type ThemeTypeWithName = {
  name: themeNameType;
  theme: ThemeType;
};
const themes: ThemeTypeWithName[] = [
  { name: "CRUK", theme: crukTheme },
  { name: "SU2C", theme: su2cTheme },
  { name: "RFL", theme: rflTheme },
  { name: "Bowelbabe", theme: bowelbabeTheme },
];

export function testAccessibilityForTheme({
  componentName,
  themeName,
  component,
  ignoreRules,
}: {
  componentName: string;
  themeName: "CRUK" | "SU2C" | "RFL" | "Bowelbabe";
  component: () => React.ReactElement;
  ignoreRules?: string[];
}) {
  const theme = (themes.find((t) => t.name === themeName) as ThemeTypeWithName)
    .theme;

  test(`${componentName}: Accessible with ${theme.name} theme`, async ({
    mount,
    page,
  }) => {
    try {
      await mount(
        <>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <main tabIndex={0}>{component()}</main>
          </ThemeProvider>
        </>,
      );

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include("body")
        .analyze();
      expect(
        accessibilityScanResults.violations.filter((item) => {
          return !(ignoreRules || []).includes(item.id);
        }),
      ).toEqual([]);
    } catch (error) {
      console.error(`Error in ${theme.name}:`, error);
      throw error;
    }
  });
}

export function testAccessibilityOnAllThemes({
  componentName,
  component,
  ignoreRules,
}: {
  componentName: string;
  component: () => React.ReactElement;
  ignoreRules?: string[];
}) {
  themes.forEach(({ name }) => {
    testAccessibilityForTheme({
      componentName,
      themeName: name,
      component,
      ignoreRules,
    });
  });
}
