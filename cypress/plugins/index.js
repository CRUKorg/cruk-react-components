let percyHealthCheck = require('@percy/cypress/task');
const preprocessor = require('@cypress/webpack-preprocessor');

module.exports = (on, config) => {
  on("task", percyHealthCheck);
  const options = { webpackOptions: require('../../webpack.config.test.js') };
  on('file:preprocessor', preprocessor(options));
  return config;
};
