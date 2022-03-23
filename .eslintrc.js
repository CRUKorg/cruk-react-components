module.exports = {
  extends: ["@cruk", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  rules: {
    // this is because even though storybook is a production deploy it's after compilation,
    // and we don't want storybook stuff to be seen as a production dep for anyone importing the component lib
    "import/no-extraneous-dependencies": [
      2,
      {
        devDependencies: ["**/*.cypress.tsx", "**/*.stories.tsx"],
      },
    ],
    "jest/expect-expect": [0],
    "jest/valid-expect": [0],
    "import/no-named-as-default": [0],
    "react/require-default-props": [0],
  },
  ignorePatterns: ["cypress", "*.config.js", "webpack.*.js", "node_modules"],
};
