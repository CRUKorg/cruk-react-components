import React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import { testAccessibilityForTheme } from "playwright/utils";
import { TestThemeWrapper } from "../AllThemesWrapper";

import { TestModalWithState } from "./TestModalWithState";
import { TestModalWithContent } from "./TestModalWithContent";
import "./styles.css";

// we have to pump theme into the content as well as the theme wrapper because of react portals ignoring the theme wrapper
testAccessibilityForTheme({
  componentName: "Modal with content",
  themeName: "cruk",
  component: () => <TestModalWithContent themeName="cruk" />,
  ignoreRules: [],
});
testAccessibilityForTheme({
  componentName: "Modal with content",
  themeName: "rfl",
  component: () => <TestModalWithContent themeName="rfl" />,
  ignoreRules: [],
});
testAccessibilityForTheme({
  componentName: "Modal with content",
  themeName: "su2c",
  component: () => <TestModalWithContent themeName="su2c" />,
  ignoreRules: [],
});
testAccessibilityForTheme({
  componentName: "Modal with content",
  themeName: "bowelbabe",
  component: () => <TestModalWithContent themeName="bowelbabe" />,
  ignoreRules: [],
});

test("should open modal, focus trap inside the modal", async ({
  mount,
  page,
}) => {
  await mount(
    <TestThemeWrapper themeName="cruk">
      <TestModalWithState themeName="cruk" />
    </TestThemeWrapper>,
  );

  await page.getByRole("button", { name: "Show me a modal" }).click();
  await expect(page.getByRole("button", { name: "close" })).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Get me out of here" }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Go for it 😃" }),
  ).toBeVisible();
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("button", { name: "Get me out of here" }),
  ).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("button", { name: "Go for it 😃" }),
  ).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(page.getByRole("button", { name: "close" })).toBeFocused();
});

test("should close the modal when Esc key pressed", async ({ mount, page }) => {
  await mount(
    <TestThemeWrapper themeName="cruk">
      <TestModalWithState themeName="cruk" />
    </TestThemeWrapper>,
  );

  await page.getByRole("button", { name: "Show me a modal" }).click();
  await expect(page.getByRole("button", { name: "close" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "close" })).not.toBeVisible();
});
