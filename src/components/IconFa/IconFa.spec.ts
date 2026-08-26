import AxeBuilder from "@axe-core/playwright";

import { test, expect } from "@playwright/test";

test("IconFa Accessible with CRUK theme", async ({ mount, page }) => {
  await mount("IconFa.spec/CrukTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("IconFa Accessible with RFL theme", async ({ mount, page }) => {
  await mount("IconFa.spec/RflTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("IconFa Accessible with SU2C theme", async ({ mount, page }) => {
  await mount("IconFa.spec/Su2cTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("IconFa Accessible with Bowelbabe theme", async ({ mount, page }) => {
  await mount("IconFa.spec/BowelbabeTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
