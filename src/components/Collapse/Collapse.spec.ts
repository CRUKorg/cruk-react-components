import AxeBuilder from "@axe-core/playwright";

import { test, expect } from "playwright/test";

test("Collapse Accessible with CRUK theme", async ({ mount, page }) => {
  await mount("Collapse.spec/CrukTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Collapse Accessible with RFL theme", async ({ mount, page }) => {
  await mount("Collapse.spec/RflTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Collapse Accessible with SU2C theme", async ({ mount, page }) => {
  await mount("Collapse.spec/Su2cTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Collapse Accessible with Bowelbabe theme", async ({ mount, page }) => {
  await mount("Collapse.spec/BowelbabeTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
