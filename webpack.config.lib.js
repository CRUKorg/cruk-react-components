const path = require('path');
const createWebpackConfig = require('./webpack.common').createWebpackConfig;

module.exports = createWebpackConfig({
  entry: './src/components',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js',
    library: 'crukReactComponents',
    libraryTarget: 'umd',
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'styled-components': {
      root: 'StyledComponents',
      commonjs2: 'styled-components',
      commonjs: 'styled-components',
      amd: 'styled-components',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    },
  },
  devtool: 'source-map',
});
