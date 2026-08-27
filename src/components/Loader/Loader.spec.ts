import AxeBuilder from "@axe-core/playwright";

import { test, expect } from "@playwright/test";

test("Loader Accessible with CRUK theme", async ({ mount, page }) => {
  await mount("Loader.spec/CrukTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Loader Accessible with RFL theme", async ({ mount, page }) => {
  await mount("Loader.spec/RflTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Loader Accessible with SU2C theme", async ({ mount, page }) => {
  await mount("Loader.spec/Su2cTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Loader Accessible with Bowelbabe theme", async ({ mount, page }) => {
  await mount("Loader.spec/BowelbabeTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
