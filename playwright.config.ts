import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  snapshotDir: "./__snapshots__",
  testDir: "./src/components",
  timeout: 10 * 1000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "components",
      testMatch: ["**/*.spec.ts"],

      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1600, height: 860 },
        baseURL: "http://localhost:5173/playwright/index.html",
        serviceWorkers: "block",
        reuseContext: true,
      },
    },
  ],
  webServer: {
    command: "npm run dev",
    url: "http://localhost:5173/playwright/index.html",
    reuseExistingServer: !process.env.CI,
  },
});
