const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');

const preprocessor = require('@cypress/webpack-preprocessor');

module.exports = (on, config) => {
  // config.env.webpackFilename = './webpack.config.test.js';
  addMatchImageSnapshotPlugin(on, config);
  const webpack = require('../../webpack.config.test.js');
  // https://www.youtube.com/watch?v=00BNExlJUU8&amp;index=10
  // require('cypress-react-unit-test/plugins/react-scripts')(on, config);
  on('file:preprocessor', preprocessor({ webpack }));

  return config;
};
