import AxeBuilder from "@axe-core/playwright";

import { test, expect } from "playwright/test";

test("LegendWrapper Accessible with CRUK theme", async ({ mount, page }) => {
  await mount("LegendWrapper.spec/CrukTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("LegendWrapper Accessible with RFL theme", async ({ mount, page }) => {
  await mount("LegendWrapper.spec/RflTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("LegendWrapper Accessible with SU2C theme", async ({ mount, page }) => {
  await mount("LegendWrapper.spec/Su2cTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("LegendWrapper Accessible with Bowelbabe theme", async ({
  mount,
  page,
}) => {
  await mount("LegendWrapper.spec/BowelbabeTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
