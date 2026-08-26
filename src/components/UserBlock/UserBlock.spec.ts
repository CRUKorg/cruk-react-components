import AxeBuilder from "@axe-core/playwright";

import { test, expect } from "playwright/test";

test("UserBlock Accessible with CRUK theme", async ({ mount, page }) => {
  await mount("UserBlock.spec/CrukTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("UserBlock Accessible with RFL theme", async ({ mount, page }) => {
  await mount("UserBlock.spec/RflTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("UserBlock Accessible with SU2C theme", async ({ mount, page }) => {
  await mount("UserBlock.spec/Su2cTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("UserBlock Accessible with Bowelbabe theme", async ({ mount, page }) => {
  await mount("UserBlock.spec/BowelbabeTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
