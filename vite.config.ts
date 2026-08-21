import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  define: {
    "process.env.NODE_ENV": `'${mode || "production"}'`,
  },
}));
