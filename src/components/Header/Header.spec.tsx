import React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import { testAccessibilityOnAllThemes } from "playwright/utils";

import { Header } from ".";
import { Button } from "..";

import { TestThemeWrapper } from "../AllThemesWrapper";

function component() {
  return (
    <>
      <Header siteSlogan="Header slogan here" themeName="cruk">
        <Button>Child component</Button>
      </Header>
      <div id="main" tabIndex={-1}>
        blah
      </div>
    </>
  );
}

testAccessibilityOnAllThemes({
  componentName: "Header",
  component: component,
});

test("should scroll to main content", async ({ mount, page }) => {
  await mount(
    <TestThemeWrapper themeName="cruk">{component()}</TestThemeWrapper>,
  );

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
  const stickyContainer = page.getByTestId("header-sticky-container");
  await expect(stickyContainer).toHaveCSS("height", "120px");
  await expect(stickyContainer).toHaveCSS("position", "relative");
});

test("sticky header behaviour ", async ({ mount, page }) => {
  await page.setViewportSize({ width: 2000, height: 200 });
  await mount(
    <TestThemeWrapper themeName="cruk">
      <Header siteSlogan="Header slogan here" isSticky themeName="cruk">
        <Button>Child component</Button>
      </Header>
      <div
        className="making-a-tall-scroll-able-page"
        style={{ height: 2000 }}
      />
    </TestThemeWrapper>,
  );
  // should reduce to smaller height when not at top of page
  await page.evaluate(() => window.scrollTo(0, 800));
  const stickyContainer = page.getByTestId("header-sticky-container");
  await expect(stickyContainer).toHaveCSS("height", "72px");
  await expect(stickyContainer).toHaveCSS("position", "fixed");
  await expect(stickyContainer).toHaveCSS("top", "0px");
});
