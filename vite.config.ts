import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig(({ mode }) => ({
  plugins: [
    react({ plugins: [["@swc/plugin-styled-components", {}]] }),
    legacy(),
  ],
  define: {
    "process.env.NODE_ENV": `'${mode || "production"}'`, // browser throws an error about process not defined on determineTheme.ts
    SC_DISABLE_SPEEDY: "true", // needed to enable vendor prefixing using 'vite build'
    // using process.env.SC_DISABLE_SPEEDY doesn't work due to the way styled-components checks for process.env
    // https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/constants.ts#L17
    // I'm guessing process.env ternary worked in webpack but doesn't work with vite
    // you also need to wrap the app with <StyleSheetManager enableVendorPrefixes={true}>
  },
}));
