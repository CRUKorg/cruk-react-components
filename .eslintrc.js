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
    // "react/function-component-definition": [
    //   2,
    //   {
    //     namedComponents: ["arrow-function"],
    //   },
    // ],
    "react/jsx-no-useless-fragment": [0],
  },
  ignorePatterns: ["cypress", "*.config.js", "webpack.*.js", "node_modules"],
};
