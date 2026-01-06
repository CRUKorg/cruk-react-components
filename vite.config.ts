import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig(({ mode }) => ({
  plugins: [legacy({ targets: ["defaults", "not IE 11"] })],
  define: {
    "process.env.NODE_ENV": `'${mode || "production"}'`,
  },
}));
