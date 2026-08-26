import AxeBuilder from "@axe-core/playwright";

import { test, expect } from "playwright/test";

// we have to pump theme into the content as well as the theme wrapper because of react portals ignoring the theme wrapper
test("Modal with content Accessible with CRUK theme", async ({
  mount,
  page,
}) => {
  await mount("Modal.spec/CrukTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Modal with content Accessible with RFL theme", async ({
  mount,
  page,
}) => {
  await mount("Modal.spec/RflTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Modal with content Accessible with SU2C theme", async ({
  mount,
  page,
}) => {
  await mount("Modal.spec/Su2cTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Modal with content Accessible with Bowelbabe theme", async ({
  mount,
  page,
}) => {
  await mount("Modal.spec/BowelbabeTheme");
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("should open modal, focus trap inside the modal", async ({
  mount,
  page,
}) => {
  await mount("Modal.spec/WithOpenButton");

  await page.getByRole("button", { name: "Show me a modal" }).click();
  await expect(page.getByRole("button", { name: "close" })).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Get me out of here" }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Go for it 😃" }),
  ).toBeVisible();
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("button", { name: "Get me out of here" }),
  ).toBeFocused();
  await page.keyboard.press("Tab");
  // what item has focus now?

  await expect(
    page.getByRole("button", { name: "Go for it 😃" }),
  ).toBeFocused();
  await page.keyboard.press("Tab");

  //  don't expect the show modal button to be focused as focus is trapped in the modal
  await expect(
    page.getByRole("button", { name: "Show me a modal" }),
  ).not.toBeFocused();
});

test("should close the modal when Esc key pressed", async ({ mount, page }) => {
  await mount("Modal.spec/WithOpenButton");

  await page.getByRole("button", { name: "Show me a modal" }).click();
  await expect(page.getByRole("button", { name: "close" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "close" })).not.toBeVisible();
});
