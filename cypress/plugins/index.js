const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');
const preprocessor = require('@cypress/webpack-preprocessor');

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);
  const options = { webpackOptions: require('../../webpack.config.test.js') };
  on('file:preprocessor', preprocessor(options));
  return config;
};
