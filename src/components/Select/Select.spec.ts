import AxeBuilder from "@axe-core/playwright";

import { test, expect } from "@playwright/test";

test("Select Accessible with CRUK theme", async ({ mount, page }) => {
  await mount("Select.spec/CrukTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Select Accessible with RFL theme", async ({ mount, page }) => {
  await mount("Select.spec/RflTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Select Accessible with SU2C theme", async ({ mount, page }) => {
  await mount("Select.spec/Su2cTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Select Accessible with Bowelbabe theme", async ({ mount, page }) => {
  await mount("Select.spec/BowelbabeTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("can change selection with keyboard controls", async ({ mount, page }) => {
  await mount("Select.spec/SelectSection");

  await page.getByRole("button", { name: "Click me" }).focus();
  await page.keyboard.press("Tab");
  expect(page.getByRole("combobox")).toBeFocused();

  // TODO figure out what playright can't open the select dropdown with keyboard controls
  // await page.keyboard.press(" ");
  // await page.waitForTimeout(1000);
  // await expect(page.getByLabel("Test Select Option")).toHaveValue("none");
  // await expect(page.getByRole("option", { name: "Cat" })).toBeVisible();
  // await page.keyboard.press("ArrowDown");
  // await page.keyboard.press(" ");
  // await page.getByRole("option", { name: "Cat" }).click();
  // await expect(page.getByLabel("Test Select Option")).toHaveValue("cat");
});
