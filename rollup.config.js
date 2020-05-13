import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import md from 'rollup-plugin-md';

export default {
  input: 'src/components/index.tsx',
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
    resolve({ modulesOnly: true }),
    commonjs({ ignoreGlobal: true, include: 'node_modules/**', exclude: 'node_modules/buble/**' }),
    babel({
      exclude: 'node_modules/**',
    }),
    md(),
    terser(),
    typescript(),
  ],
};
