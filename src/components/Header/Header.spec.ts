import AxeBuilder from "@axe-core/playwright";

import { test, expect } from "playwright/test";

test("Header Accessible with CRUK theme", async ({ mount, page }) => {
  await mount("Header.spec/CrukTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Header Accessible with RFL theme", async ({ mount, page }) => {
  await mount("Header.spec/RflTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Header Accessible with SU2C theme", async ({ mount, page }) => {
  await mount("Header.spec/Su2cTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Header Accessible with Bowelbabe theme", async ({ mount, page }) => {
  await mount("Header.spec/BowelbabeTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("should scroll to main content", async ({ mount, page }) => {
  const component = await mount("Header.spec/CrukTheme");

  await expect(page.getByText("Header slogan here")).toBeVisible();
  await page.locator("a", { hasText: "Skip to main content" }).focus();
  await page.locator("a", { hasText: "Skip to main content" }).click();
  await expect(page.getByRole("main")).toBeVisible();

  //should alt text in link in logo image
  await expect(
    page.getByRole("img", { name: "Cancer Research UK Giving Page" }),
  ).toBeVisible();
  //should go to link in logo
  await expect(
    page.getByRole("link", { name: "Cancer Research UK Giving Page" }),
  ).toHaveAttribute("href", "/");
  //should stick to the top of the page
  const stickyContainer = component.getByTestId("header-sticky-container");
  await expect(stickyContainer).toHaveCSS("height", "120px");
  await expect(stickyContainer).toHaveCSS("position", "relative");
});

test("sticky header behaviour ", async ({ mount, page }) => {
  await page.setViewportSize({ width: 2000, height: 200 });
  const component = await mount("Header.spec/Sticky");

  // should reduce to smaller height when not at top of page
  await page.evaluate(() => window.scrollTo(0, 800));
  const stickyContainer = component.getByTestId("header-sticky-container");
  await expect(stickyContainer).toHaveCSS("height", "72px");
  await expect(stickyContainer).toHaveCSS("position", "fixed");
  await expect(stickyContainer).toHaveCSS("top", "0px");
});
