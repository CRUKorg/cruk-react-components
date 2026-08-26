import AxeBuilder from "@axe-core/playwright";

import { test, expect } from "playwright/test";

test("Carousel Accessible with CRUK theme", async ({ mount, page }) => {
  await mount("Carousel.spec/CrukTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Carousel Accessible with RFL theme", async ({ mount, page }) => {
  await mount("Carousel.spec/RflTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Carousel Accessible with SU2C theme", async ({ mount, page }) => {
  await mount("Carousel.spec/Su2cTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Carousel Accessible with Bowelbabe theme", async ({ mount, page }) => {
  await mount("Carousel.spec/BowelbabeTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
