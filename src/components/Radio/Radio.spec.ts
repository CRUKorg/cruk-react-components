import AxeBuilder from "@axe-core/playwright";

import { test, expect } from "playwright/test";

test("Radio Accessible with CRUK theme", async ({ mount, page }) => {
  await mount("Radio.spec/CrukTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Radio Accessible with RFL theme", async ({ mount, page }) => {
  await mount("Radio.spec/RflTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Radio Accessible with SU2C theme", async ({ mount, page }) => {
  await mount("Radio.spec/Su2cTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Radio Accessible with Bowelbabe theme", async ({ mount, page }) => {
  await mount("Radio.spec/BowelbabeTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
