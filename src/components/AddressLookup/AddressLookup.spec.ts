import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

test(`AddressLookup Accessible with CRUK theme`, async ({ mount, page }) => {
  await mount("AddressLookup.spec/CrukTheme");

  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test(`AddressLookup Accessible with RFL theme`, async ({ mount, page }) => {
  await mount("AddressLookup.spec/RflTheme");

  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test(`AddressLookup Accessible with SU2C theme`, async ({ mount, page }) => {
  await mount("AddressLookup.spec/Su2cTheme");

  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test(`AddressLookup Accessible with Bowelbabe theme`, async ({
  mount,
  page,
}) => {
  await mount("AddressLookup.spec/BowelbabeTheme");

  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("can find address", async ({ mount, page }) => {
  await mount("AddressLookup.spec/CrukTheme");
  await page.route("**/Find/**", async (route) => {
    await route.fulfill({
      status: 200,
      json: {
        Items: [
          {
            Description: "London",
            Id: "1",
            Text: "N10 Logistics",
            Type: "Address",
          },
          {
            Description: "High Road, London - 14 Addresses",
            Id: "2",
            Text: "N17 0AB",
            Type: "Postcode",
          },
        ],
      },
    });
  });

  page.on("request", (request) => {
    if (request.url().includes("Find")) {
      expect(request.url()).toContain("Countries=GBR");
    }
  });

  await page.getByLabel("Home address").focus();
  await page.getByLabel("Home address").fill("N10");
  await page.waitForRequest("**/Find/**");
  await expect(
    page.locator('li:has-text("N17 0AB High Road, London - 14 Addresses")'),
  ).toBeVisible({ timeout: 20000 });
});

test("can focus address dropdown", async ({ mount, page }) => {
  await mount("AddressLookup.spec/CrukTheme");
  await page.route("**/Find/**", async (route) => {
    await route.fulfill({
      status: 200,
      json: {
        Items: [
          {
            Description: "London",
            Id: "1",
            Text: "N10 Logistics",
            Type: "Address",
          },
          {
            Description: "High Road, London - 14 Addresses",
            Id: "2",
            Text: "N17 0AB",
            Type: "Postcode",
          },
        ],
      },
    });
  });
  await page.getByLabel("Home address").focus();
  await page.getByLabel("Home address").fill("N10");
  await page.waitForRequest("**/Find/**");
  await expect(
    page.locator('li:has-text("N17 0AB High Road, London - 14 Addresses")'),
  ).toBeVisible({ timeout: 20000 });
  await page
    .locator('li:has-text("N17 0AB High Road, London - 14 Addresses")')
    .focus();
  const focusedElement = page.locator(":focus");
  await expect(focusedElement).toHaveText(
    "N17 0AB High Road, London - 14 Addressespress enter for these addresses",
  );
});
