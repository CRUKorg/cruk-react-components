module.exports = {
  extends: ["@cruk", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  rules: {
    "import/no-extraneous-dependencies": [
      2,
      {
        devDependencies: ["**/*.cypress.tsx"],
      },
    ],
    "jest/expect-expect": [0],
    "jest/valid-expect": [0],
    "import/no-named-as-default": [0],
  },
  ignorePatterns: ["cypress", "*.config.js", "webpack.*.js", "node_modules"],
};
