import React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import { testAccessibilityOnAllThemes } from "playwright/utils";

import { Checkbox } from ".";
import { Box } from "../Box";
import { TestThemeWrapper } from "../AllThemesWrapper";

function unControlledContent() {
  return (
    <>
      <Box>
        <Checkbox name="example" value="one" checked>
          Option one
        </Checkbox>
      </Box>
      <Box>
        <Checkbox name="example" value="two">
          Option two
        </Checkbox>
      </Box>
    </>
  );
}

testAccessibilityOnAllThemes({
  componentName: "Checkbox",
  component: unControlledContent,
});

test("should be able to select a checkbox", async ({ mount, page }) => {
  await mount(
    <TestThemeWrapper themeName="cruk">
      {unControlledContent()}
    </TestThemeWrapper>,
  );

  await page.getByText("Option two").click();
  await expect(
    page.getByRole("checkbox", { name: "Option two" }),
  ).toBeChecked();
});
