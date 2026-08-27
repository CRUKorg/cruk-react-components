import AxeBuilder from "@axe-core/playwright";

import { test, expect } from "@playwright/test";

test("ErrorText Accessible with CRUK theme", async ({ mount, page }) => {
  await mount("ErrorText.spec/CrukTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("ErrorText Accessible with RFL theme", async ({ mount, page }) => {
  await mount("ErrorText.spec/RflTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("ErrorText Accessible with SU2C theme", async ({ mount, page }) => {
  await mount("ErrorText.spec/Su2cTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("ErrorText Accessible with Bowelbabe theme", async ({ mount, page }) => {
  await mount("ErrorText.spec/BowelbabeTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
