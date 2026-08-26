import AxeBuilder from "@axe-core/playwright";

import { test, expect } from "@playwright/test";

test("Link Accessible with CRUK theme", async ({ mount, page }) => {
  await mount("Link.spec/CrukTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Link Accessible with RFL theme", async ({ mount, page }) => {
  await mount("Link.spec/RflTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Link Accessible with SU2C theme", async ({ mount, page }) => {
  await mount("Link.spec/Su2cTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Link Accessible with Bowelbabe theme", async ({ mount, page }) => {
  await mount("Link.spec/BowelbabeTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
