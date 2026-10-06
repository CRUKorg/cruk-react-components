import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
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
  external: ["react", "react-dom"],

  plugins: [
    resolve({ modulesOnly: true }),
    commonjs(),
    // typescript({ useTsconfigDeclarationDir: true }),
    typescript({
      exclude: [
        "playwright.config.ts",
        "playwright/**",
        "**/*.spec.**",
        "playwright",
        "**/*.stories.tsx",
        ".storybook/**",
        "vite.config.ts",
        ".storybook/**",
        "**/__tests__/**",
      ],
      include: [
        "src/components/**/*",
        "src/types.ts",
        "src/hooks/**/*",
        "src/utils/**/*",
        "src/globals.d.ts",
      ],
      compilerOptions: {
        module: "esnext",
        moduleResolution: "bundler",
        lib: ["esnext", "dom"],
        types: ["node"],
      },
    }),
    postcss({
      plugins: [autoprefixer()],
      sourceMap: false,
      extract: true,
      minimize: false,
      generateScopedName: "[name]__[local]",
    }),
    terser(),
  ],
};
