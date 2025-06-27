import React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import { Modal } from ".";
import { TestModalWithState } from "./TestModalWithState";
import { Button, crukTheme, Heading } from "..";

import { testAccessibilityOnAllThemes } from "playwright/utils";
import { TestThemeWrapper } from "../AllThemesWrapper";

function component() {
  return (
    <>
      <Modal
        closeFunction={() => {
          // nothing
        }}
        showCloseButton
        modalName="test"
      >
        <Heading h2 marginTop="none" textSize="xl">
          Modal title
        </Heading>
        <p>Some really important information</p>
        <Button
          onClick={() => {
            // nothing
          }}
        >
          Get me out of here
        </Button>
        <Button
          appearance="primary"
          onClick={() => {
            // nothing
          }}
        >
          Go for it 😃
        </Button>
      </Modal>
    </>
  );
}

testAccessibilityOnAllThemes({
  componentName: "Modal",
  component: component,
});

test("should open modal, focus trap inside the modal", async ({
  mount,
  page,
}) => {
  await mount(
    <TestThemeWrapper theme={crukTheme}>
      <TestModalWithState />
    </TestThemeWrapper>,
  );

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
  await expect(
    page.getByRole("button", { name: "Go for it 😃" }),
  ).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(page.getByRole("button", { name: "close" })).toBeFocused();
});

test("should close the modal when Esc key pressed", async ({ mount, page }) => {
  await mount(
    <TestThemeWrapper theme={crukTheme}>
      <TestModalWithState />
    </TestThemeWrapper>,
  );

  await page.getByRole("button", { name: "Show me a modal" }).click();
  await expect(page.getByRole("button", { name: "close" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "close" })).not.toBeVisible();
});
