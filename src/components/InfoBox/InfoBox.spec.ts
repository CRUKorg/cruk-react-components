import AxeBuilder from "@axe-core/playwright";

import { test, expect } from "playwright/test";

test("InfoBox Accessible with CRUK theme", async ({ mount, page }) => {
  await mount("InfoBox.spec/CrukTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("InfoBox Accessible with RFL theme", async ({ mount, page }) => {
  await mount("InfoBox.spec/RflTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("InfoBox Accessible with SU2C theme", async ({ mount, page }) => {
  await mount("InfoBox.spec/Su2cTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("InfoBox Accessible with Bowelbabe theme", async ({ mount, page }) => {
  await mount("InfoBox.spec/BowelbabeTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
