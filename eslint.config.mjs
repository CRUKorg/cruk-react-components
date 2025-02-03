import tsEslintPlugin from "typescript-eslint";
import path from "path";
import { fileURLToPath } from "url";

import { config as crukConfig } from "@cruk/eslint-config";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import storybook from "eslint-plugin-storybook";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

export const config = [
  ...crukConfig,
  pluginReact.configs.flat.recommended,
  ...storybook.configs["flat/recommended"],
  {
    files: ["src/**/*.{js,ts,jsx,tsx}"],
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      ...pluginReactHooks.configs.recommended.rules,
    },
  },
  {
    languageOptions: {
      parser: tsEslintPlugin.parser,
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
      },
    },
  },
];

export default config;
