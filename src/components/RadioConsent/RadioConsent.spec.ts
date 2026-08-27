import AxeBuilder from "@axe-core/playwright";

import { test, expect } from "@playwright/test";

test("RadioConsent Accessible with CRUK theme", async ({ mount, page }) => {
  await mount("RadioConsent.spec/CrukTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("RadioConsent Accessible with RFL theme", async ({ mount, page }) => {
  await mount("RadioConsent.spec/RflTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("RadioConsent Accessible with SU2C theme", async ({ mount, page }) => {
  await mount("RadioConsent.spec/Su2cTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("RadioConsent Accessible with Bowelbabe theme", async ({
  mount,
  page,
}) => {
  await mount("RadioConsent.spec/BowelbabeTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
