import React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import AxeBuilder from "@axe-core/playwright";

import { TestThemeWrapper } from "../AllThemesWrapper";

import { TestPopOverWithContent } from "./TestPopOverWithContent";
import "./styles.css";

test("is accessible CRUK theme", async ({ mount, page }) => {
  await mount(
    <TestThemeWrapper themeName="cruk">
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
    <TestThemeWrapper themeName="rfl">
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
    <TestThemeWrapper themeName="su2c">
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
    <TestThemeWrapper themeName="bowelbabe">
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
