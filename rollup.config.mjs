import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
// import typescript from "rollup-plugin-typescript2";
import typescript from "@rollup/plugin-typescript";
// import css from "rollup-plugin-css-only";
import autoprefixer from "autoprefixer";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/components/index.ts",
  output: [
    {
      dir: "lib/",
      format: "es",
      exports: "named",
      sourcemap: true,
      preserveModules: true,

      assetFileNames: {
        "[name][extname]": "[name][extname]",
      },
    },
  ],
  external: ["prop-types", "react", "react-dom"],

  plugins: [
    resolve({ modulesOnly: true }),
    commonjs(),
    // typescript({ useTsconfigDeclarationDir: true }),
    typescript({
      exclude: [
        "playwright.config.ts",
        "playwright/**",
        "**/*.spec.tsx",
        "playwright",
        "**/*.stories.tsx",
        ".storybook/**",
        "vite.config.ts",
        ".storybook/**",
      ],
      compilerOptions: {
        moduleResolution: "node",
      },
    }),
    // css({
    //   output: "global-styles.css",
    //   include: ["src/**/*.css"],
    // }),
    postcss({
      plugins: [autoprefixer()],
      sourceMap: true,
      extract: true,
      minimize: false,
      generateScopedName: "[name]__[local]",
    }),
    terser(),
  ],
};
