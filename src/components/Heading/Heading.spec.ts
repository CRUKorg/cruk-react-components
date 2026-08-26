import AxeBuilder from "@axe-core/playwright";

import { test, expect } from "playwright/test";

test("Heading Accessible with CRUK theme", async ({ mount, page }) => {
  await mount("Heading.spec/CrukTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Heading Accessible with RFL theme", async ({ mount, page }) => {
  await mount("Heading.spec/RflTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Heading Accessible with SU2C theme", async ({ mount, page }) => {
  await mount("Heading.spec/Su2cTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Heading Accessible with Bowelbabe theme", async ({ mount, page }) => {
  await mount("Heading.spec/BowelbabeTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
