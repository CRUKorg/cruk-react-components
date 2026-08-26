import AxeBuilder from "@axe-core/playwright";

import { test, expect } from "playwright/test";

test("PopOver is accessible CRUK theme", async ({ mount, page }) => {
  await mount("PopOver.spec/CrukTheme");
  await page.getByRole("button", { name: "Share" }).click();
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("PopOver is accessible RFL theme", async ({ mount, page }) => {
  await mount("PopOver.spec/RflTheme");
  await page.getByRole("button", { name: "Share" }).click();
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("PopOver is accessible SU2C theme", async ({ mount, page }) => {
  await mount("PopOver.spec/Su2cTheme");
  await page.getByRole("button", { name: "Share" }).click();
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("PopOver is accessible Bowelbabe theme", async ({ mount, page }) => {
  await mount("PopOver.spec/BowelbabeTheme");
  await page.getByRole("button", { name: "Share" }).click();
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
