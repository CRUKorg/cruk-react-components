import AxeBuilder from "@axe-core/playwright";

import { test, expect } from "@playwright/test";

test("TextAreaField Accessible with CRUK theme", async ({ mount, page }) => {
  await mount("TextAreaField.spec/CrukTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("TextAreaField Accessible with RFL theme", async ({ mount, page }) => {
  await mount("TextAreaField.spec/RflTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("TextAreaField Accessible with SU2C theme", async ({ mount, page }) => {
  await mount("TextAreaField.spec/Su2cTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("TextAreaField Accessible with Bowelbabe theme", async ({
  mount,
  page,
}) => {
  await mount("TextAreaField.spec/BowelbabeTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
