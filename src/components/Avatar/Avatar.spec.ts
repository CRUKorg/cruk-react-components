import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

test(`AddressLookup Accessible with CRUK theme`, async ({ mount, page }) => {
  await mount("Avatar.spec/CrukTheme");

  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test(`AddressLookup Accessible with RFL theme`, async ({ mount, page }) => {
  await mount("Avatar.spec/RflTheme");

  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test(`AddressLookup Accessible with SU2C theme`, async ({ mount, page }) => {
  await mount("Avatar.spec/Su2cTheme");

  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test(`AddressLookup Accessible with Bowelbabe theme`, async ({
  mount,
  page,
}) => {
  await mount("Avatar.spec/BowelbabeTheme");

  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
