import React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import { testAccessibilityOnAllThemes } from "playwright/utils";

import { Checkbox } from ".";
import { Box } from "../Box";
import { TestThemeWrapper } from "../AllThemesWrapper";
import { crukTheme } from "src/themes/cruk";

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
    <TestThemeWrapper theme={crukTheme}>
      {unControlledContent()}
    </TestThemeWrapper>,
  );

  await page.getByText("Option two").click();
  await expect(
    page.getByRole("checkbox", { name: "Option two" }),
  ).toBeChecked();
});
