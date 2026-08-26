import AxeBuilder from "@axe-core/playwright";

import { test, expect } from "playwright/test";

test("Totaliser Accessible with CRUK theme", async ({ mount, page }) => {
  await mount("Totaliser.spec/CrukTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Totaliser Accessible with RFL theme", async ({ mount, page }) => {
  await mount("Totaliser.spec/RflTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Totaliser Accessible with SU2C theme", async ({ mount, page }) => {
  await mount("Totaliser.spec/Su2cTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Totaliser Accessible with Bowelbabe theme", async ({ mount, page }) => {
  await mount("Totaliser.spec/BowelbabeTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
