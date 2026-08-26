import AxeBuilder from "@axe-core/playwright";

import { test, expect } from "playwright/test";

test("Pagination Accessible with CRUK theme", async ({ mount, page }) => {
  await mount("Pagination.spec/CrukTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Pagination Accessible with RFL theme", async ({ mount, page }) => {
  await mount("Pagination.spec/RflTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Pagination Accessible with SU2C theme", async ({ mount, page }) => {
  await mount("Pagination.spec/Su2cTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Pagination Accessible with Bowelbabe theme", async ({ mount, page }) => {
  await mount("Pagination.spec/BowelbabeTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
