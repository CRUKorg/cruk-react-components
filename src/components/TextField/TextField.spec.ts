import AxeBuilder from "@axe-core/playwright";

import { test, expect } from "playwright/test";

test("TextField Accessible with CRUK theme", async ({ mount, page }) => {
  await mount("TextField.spec/CrukTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("TextField Accessible with RFL theme", async ({ mount, page }) => {
  await mount("TextField.spec/RflTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("TextField Accessible with SU2C theme", async ({ mount, page }) => {
  await mount("TextField.spec/Su2cTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("TextField Accessible with Bowelbabe theme", async ({ mount, page }) => {
  await mount("TextField.spec/BowelbabeTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
