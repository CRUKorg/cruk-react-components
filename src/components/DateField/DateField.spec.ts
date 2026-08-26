import AxeBuilder from "@axe-core/playwright";

import { test, expect } from "playwright/test";

test("DateField Accessible with CRUK theme", async ({ mount, page }) => {
  await mount("DateField.spec/CrukTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("DateField Accessible with RFL theme", async ({ mount, page }) => {
  await mount("DateField.spec/RflTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("DateField Accessible with SU2C theme", async ({ mount, page }) => {
  await mount("DateField.spec/Su2cTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("DateField Accessible with Bowelbabe theme", async ({ mount, page }) => {
  await mount("DateField.spec/BowelbabeTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
