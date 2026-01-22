import React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import { testAccessibilityOnAllThemes } from "playwright/utils";

import { AddressLookup } from ".";
import "./styles.css";
import "../ErrorText/styles.css";
import "../TextField/styles.css";
import "../IconFa/styles.css";

import { TestThemeWrapper } from "../AllThemesWrapper";

function component() {
  return (
    <fieldset>
      <legend>Your Address</legend>
      <div style={{ height: "300px" }}>
        <AddressLookup
          countries={["GBR"]}
          apiKey="MG17-ZD93-FF33-KF13"
          onAddressSelected={() => {
            // onAddressSelected
          }}
          onChange={() => {
            // onChange
          }}
        />
      </div>
    </fieldset>
  );
}

testAccessibilityOnAllThemes({
  componentName: "AddressLookup",
  component: component,
});

test("can find address", async ({ mount, page }) => {
  await mount(
    <TestThemeWrapper themeName="cruk">{component()}</TestThemeWrapper>,
  );
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
  await mount(
    <TestThemeWrapper themeName="cruk">{component()}</TestThemeWrapper>,
  );
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
