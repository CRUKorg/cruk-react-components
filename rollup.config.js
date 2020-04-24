import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

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
  plugins: [commonjs(), resolve({ modulesOnly: true }), terser(), typescript()],
};
