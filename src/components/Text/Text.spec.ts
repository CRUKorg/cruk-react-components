import AxeBuilder from "@axe-core/playwright";

import { test, expect } from "@playwright/test";

test("Text Accessible with CRUK theme", async ({ mount, page }) => {
  await mount("Text.spec/CrukTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Text Accessible with RFL theme", async ({ mount, page }) => {
  await mount("Text.spec/RflTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Text Accessible with SU2C theme", async ({ mount, page }) => {
  await mount("Text.spec/Su2cTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Text Accessible with Bowelbabe theme", async ({ mount, page }) => {
  await mount("Text.spec/BowelbabeTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
