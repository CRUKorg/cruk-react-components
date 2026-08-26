import AxeBuilder from "@axe-core/playwright";

import { test, expect } from "playwright/test";

test("Box Accessible with CRUK theme", async ({ mount, page }) => {
  await mount("Box.spec/CrukTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Box Accessible with RFL theme", async ({ mount, page }) => {
  await mount("Box.spec/RflTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Box Accessible with SU2C theme", async ({ mount, page }) => {
  await mount("Box.spec/Su2cTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Box Accessible with Bowelbabe theme", async ({ mount, page }) => {
  await mount("Box.spec/BowelbabeTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
