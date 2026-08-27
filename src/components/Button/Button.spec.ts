import AxeBuilder from "@axe-core/playwright";

import { test, expect } from "@playwright/test";

test("Button Accessible with CRUK theme", async ({ mount, page }) => {
  await mount("Button.spec/CrukTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Button Accessible with RFL theme", async ({ mount, page }) => {
  await mount("Button.spec/RflTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Button Accessible with SU2C theme", async ({ mount, page }) => {
  await mount("Button.spec/Su2cTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Button Accessible with Bowelbabe theme", async ({ mount, page }) => {
  await mount("Button.spec/BowelbabeTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
