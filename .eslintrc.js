module.exports = {
  extends: ["@cruk"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  rules: {
    "import/no-extraneous-dependencies": [
      2,
      { devDependencies: ["**/*.cypress.tsx"] },
    ],
    "jest/expect-expect": [0],
  },
  ignorePatterns: ["cypress", "*.config.js", "webpack.*.js", "node_modules"],
};
