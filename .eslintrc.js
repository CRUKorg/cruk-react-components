module.exports = {
  extends: ["@cruk"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  ignorePatterns: ["cypress", "*.config.js", "webpack.*.js", "node_modules"],
};
