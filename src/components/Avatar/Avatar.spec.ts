import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

test(`Avatar image follows an attribute-only data-theme change`, async ({
  mount,
  page,
}) => {
  await mount("Avatar.spec/CrukTheme");
  const avatar = page.getByAltText("sam's profile").first();
  await expect(avatar).toHaveAttribute("src", /\/avatar\/cruk2\//);

  await page
    .locator("main[data-theme]")
    .evaluate((el) => el.setAttribute("data-theme", "rfl"));
  await expect(avatar).toHaveAttribute("src", /\/avatar\/rfl\//);

  await page
    .locator("main[data-theme]")
    .evaluate((el) => el.setAttribute("data-theme", "su2c"));
  await expect(avatar).toHaveAttribute("src", /\/avatar\/su2c\//);
});

test(`Avatar Accessible with CRUK theme`, async ({ mount, page }) => {
  await mount("Avatar.spec/CrukTheme");

  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test(`Avatar Accessible with RFL theme`, async ({ mount, page }) => {
  await mount("Avatar.spec/RflTheme");

  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test(`Avatar Accessible with SU2C theme`, async ({ mount, page }) => {
  await mount("Avatar.spec/Su2cTheme");

  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test(`Avatar Accessible with Bowelbabe theme`, async ({ mount, page }) => {
  await mount("Avatar.spec/BowelbabeTheme");

  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("body")
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
