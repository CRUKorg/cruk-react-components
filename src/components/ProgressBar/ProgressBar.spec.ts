import AxeBuilder from "@axe-core/playwright";

import { test, expect } from "@playwright/test";

test("ProgressBar Accessible with CRUK theme", async ({ mount, page }) => {
  await mount("ProgressBar.spec/CrukTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("ProgressBar Accessible with RFL theme", async ({ mount, page }) => {
  await mount("ProgressBar.spec/RflTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("ProgressBar Accessible with SU2C theme", async ({ mount, page }) => {
  await mount("ProgressBar.spec/Su2cTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("ProgressBar Accessible with Bowelbabe theme", async ({ mount, page }) => {
  await mount("ProgressBar.spec/BowelbabeTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
