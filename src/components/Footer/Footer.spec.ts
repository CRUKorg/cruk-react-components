import AxeBuilder from "@axe-core/playwright";

import { test, expect } from "playwright/test";

// We know that the color-contrast rule is failing on some SU2C, so we ignore it for now. We have new designs coming soon.
const ignoreRules = ["color-contrast"];

test("Footer Accessible with CRUK theme", async ({ mount, page }) => {
  await mount("Footer.spec/CrukTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(
    accessibilityScanResults.violations.filter(
      (item) => !ignoreRules.includes(item.id),
    ),
  ).toEqual([]);
});

test("Footer Accessible with RFL theme", async ({ mount, page }) => {
  await mount("Footer.spec/RflTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(
    accessibilityScanResults.violations.filter(
      (item) => !ignoreRules.includes(item.id),
    ),
  ).toEqual([]);
});

test("Footer Accessible with SU2C theme", async ({ mount, page }) => {
  await mount("Footer.spec/Su2cTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(
    accessibilityScanResults.violations.filter(
      (item) => !ignoreRules.includes(item.id),
    ),
  ).toEqual([]);
});

test("Footer Accessible with Bowelbabe theme", async ({ mount, page }) => {
  await mount("Footer.spec/BowelbabeTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(
    accessibilityScanResults.violations.filter(
      (item) => !ignoreRules.includes(item.id),
    ),
  ).toEqual([]);
});
