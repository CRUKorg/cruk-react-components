import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/components/index.ts",
  output: [
    {
      dir: "lib/es/",
      format: "es",
      exports: "named",
      sourcemap: true,
    },
  ],
  external: ["prop-types", "react", "react-dom", "styled-components"],
  plugins: [
    resolve({ modulesOnly: true }),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    terser(),
  ],
  preserveModules: true,
};
