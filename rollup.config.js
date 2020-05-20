import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
import mdToBase64 from './src/plugins/rollupPluginMdToBase64';
import path from 'path';
import { DEFAULT_EXTENSIONS } from '@babel/core';

export default {
  input: 'src/components/index.ts',
  output: [
    {
      dir: 'lib/',
      format: 'es',
      sourcemap: true,
    },
    // {
    //   dir: 'lib/',
    //   format: 'umd',
    //   name: 'crukReactComponents',
    //   globals: {
    //     'prop-types': 'PropTypes',
    //     react: 'React',
    //     'react-dom': 'ReactDOM',
    //     'styled-components': 'styled',
    //   },
    //   sourcemap: true,
    // },
  ],
  external: ['prop-types', 'react', 'react-dom', 'styled-components'],
  plugins: [
    mdToBase64(),
    babel({
      exclude: 'node_modules/**',
      extensions: [...DEFAULT_EXTENSIONS],
    }),
    resolve({ modulesOnly: true }),
    commonjs(),
    terser(),
    typescript({ useTsconfigDeclarationDir: true }),
  ],
};
