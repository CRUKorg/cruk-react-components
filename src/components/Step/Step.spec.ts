import AxeBuilder from "@axe-core/playwright";

import { test, expect } from "playwright/test";

test("Step Accessible with CRUK theme", async ({ mount, page }) => {
  await mount("Step.spec/CrukTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Step Accessible with RFL theme", async ({ mount, page }) => {
  await mount("Step.spec/RflTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Step Accessible with SU2C theme", async ({ mount, page }) => {
  await mount("Step.spec/Su2cTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Step Accessible with Bowelbabe theme", async ({ mount, page }) => {
  await mount("Step.spec/BowelbabeTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
