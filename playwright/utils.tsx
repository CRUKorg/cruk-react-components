import { test, expect } from "@playwright/experimental-ct-react";
import { AxeBuilder } from "@axe-core/playwright";
import React from "react";
import { type ThemeNameType, themeNames } from "src/types";

export function testAccessibilityForTheme({
  componentName,
  themeName,
  component,
  ignoreRules,
}: {
  componentName: string;
  themeName: ThemeNameType;
  component: () => React.ReactElement;
  ignoreRules?: string[];
}) {
  test(`${componentName}: Accessible with ${themeName} theme`, async ({
    mount,
    page,
  }) => {
    try {
      await mount(
        <>
          <div data-theme={themeName}>
            <main tabIndex={0}>{component()}</main>
          </div>
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
      console.error(`Error in ${themeName}:`, error);
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
  themeNames.forEach((nameOfTheme) => {
    testAccessibilityForTheme({
      componentName,
      themeName: nameOfTheme,
      component,
      ignoreRules,
    });
  });
}
