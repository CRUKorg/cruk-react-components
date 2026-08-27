import AxeBuilder from "@axe-core/playwright";

import { test, expect } from "@playwright/test";

test("Badge Accessible with CRUK theme", async ({ mount, page }) => {
  await mount("Badge.spec/CrukTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Badge Accessible with RFL theme", async ({ mount, page }) => {
  await mount("Badge.spec/RflTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Badge Accessible with SU2C theme", async ({ mount, page }) => {
  await mount("Badge.spec/Su2cTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Badge Accessible with Bowelbabe theme", async ({ mount, page }) => {
  await mount("Badge.spec/BowelbabeTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
