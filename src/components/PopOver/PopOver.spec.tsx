import React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import AxeBuilder from "@axe-core/playwright";

import { crukTheme, rflTheme, su2cTheme, bowelbabeTheme } from "..";
import { TestThemeWrapper } from "../AllThemesWrapper";

import { TestPopOverWithContent } from "./TestPopOverWithContent";

test("is accessible CRUK theme", async ({ mount, page }) => {
  await mount(
    <TestThemeWrapper theme={crukTheme}>
      {TestPopOverWithContent()}
    </TestThemeWrapper>,
  );

  await page.getByRole("button", { name: "Share" }).click();
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(
    accessibilityScanResults.violations,
    //   .filter((item) => {
    //   return !(ignoreRules || []).includes(item.id);
    // }),
  ).toEqual([]);
});

test("is accessible RFL theme", async ({ mount, page }) => {
  await mount(
    <TestThemeWrapper theme={rflTheme}>
      {TestPopOverWithContent()}
    </TestThemeWrapper>,
  );
  await page.getByRole("button", { name: "Share" }).click();
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(
    accessibilityScanResults.violations,
    //   .filter((item) => {
    //   return !(ignoreRules || []).includes(item.id);
    // }),
  ).toEqual([]);
});

test("is accessible SU2C theme", async ({ mount, page }) => {
  await mount(
    <TestThemeWrapper theme={su2cTheme}>
      {TestPopOverWithContent()}
    </TestThemeWrapper>,
  );
  await page.getByRole("button", { name: "Share" }).click();
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(
    accessibilityScanResults.violations,
    //   .filter((item) => {
    //   return !(ignoreRules || []).includes(item.id);
    // }),
  ).toEqual([]);
});

test("is accessible Bowelbabe theme", async ({ mount, page }) => {
  await mount(
    <TestThemeWrapper theme={bowelbabeTheme}>
      {TestPopOverWithContent()}
    </TestThemeWrapper>,
  );
  await page.getByRole("button", { name: "Share" }).click();
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(
    accessibilityScanResults.violations,
    //   .filter((item) => {
    //   return !(ignoreRules || []).includes(item.id);
    // }),
  ).toEqual([]);
});
