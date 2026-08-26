import AxeBuilder from "@axe-core/playwright";

import { test, expect } from "playwright/test";

test("Checkbox Accessible with CRUK theme", async ({ mount, page }) => {
  await mount("Checkbox.spec/CrukTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Checkbox Accessible with RFL theme", async ({ mount, page }) => {
  await mount("Checkbox.spec/RflTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Checkbox Accessible with SU2C theme", async ({ mount, page }) => {
  await mount("Checkbox.spec/Su2cTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Checkbox Accessible with Bowelbabe theme", async ({ mount, page }) => {
  await mount("Checkbox.spec/BowelbabeTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("should be able to select a checkbox", async ({ mount, page }) => {
  await mount("Checkbox.spec/CrukTheme");

  await page.getByText("Option two").click();
  await expect(
    page.getByRole("checkbox", { name: "Option two" }),
  ).toBeChecked();
});
