import React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import { testAccessibilityOnAllThemes } from "playwright/utils";

import { Select } from ".";
import { Box, Button } from "..";
import { TestThemeWrapper } from "../AllThemesWrapper";

const component = () => (
  <>
    <Box>
      <Select
        value=""
        label="Disabled option"
        onChange={(event) => {
          console.log({ event });
        }}
      >
        <option disabled value="">
          --Please choose an option--
        </option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
      </Select>
    </Box>
    <Box>
      <Select
        value=""
        label="Disabled control"
        onChange={(event) => {
          console.log({ event });
        }}
        disabled
      >
        <option disabled value="">
          --Please choose an option--
        </option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
      </Select>
    </Box>
    <Box>
      <Select
        required
        hasError
        label="Has error"
        onChange={(event) => {
          console.log({ event });
        }}
      >
        <option value="dog">Dog</option>
        <option value="red_panda">Red panda</option>
        <option value="axolotl">Axolotl</option>
      </Select>
    </Box>
    <Box>
      <Select
        required
        errorMessage="This field is required ☹️"
        label="Error message"
        onChange={(event) => {
          console.log({ event });
        }}
      >
        <option value="cat">Cat</option>
      </Select>
    </Box>
  </>
);

testAccessibilityOnAllThemes({
  componentName: "Select",
  component,
});

const selectSection = () => (
  <>
    <Box>
      <Button>Click me</Button>
    </Box>
    <Select label="Test Select Option">
      <option value="none">Please select one of the below</option>
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
    </Select>
  </>
);

test("can change selection with keyboard controls", async ({ mount, page }) => {
  await mount(
    <TestThemeWrapper themeName="cruk">{selectSection()}</TestThemeWrapper>,
  );

  await page.getByRole("button", { name: "Click me" }).focus();
  await page.keyboard.press("Tab");
  expect(page.getByRole("combobox")).toBeFocused();

  // TODO figure out what playright can't open the select dropdown with keyboard controls
  // await page.keyboard.press(" ");
  // await page.waitForTimeout(1000);
  // await expect(page.getByLabel("Test Select Option")).toHaveValue("none");
  // await expect(page.getByRole("option", { name: "Cat" })).toBeVisible();
  // await page.keyboard.press("ArrowDown");
  // await page.keyboard.press(" ");
  // await page.getByRole("option", { name: "Cat" }).click();
  // await expect(page.getByLabel("Test Select Option")).toHaveValue("cat");
});
