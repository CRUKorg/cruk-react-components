const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');
const preprocessor = require('@cypress/webpack-preprocessor');
const options = { webpackOptions: require('../../webpack.config.test.js') };

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);
  
  if (config.testingType === 'component') {
    const { startDevServer } = require('@cypress/webpack-dev-server')
    
    // Your project's Webpack configuration
    const webpackConfig = require('../../webpack.config.test.js')
    
    on('file:preprocessor', preprocessor(options));
    on('dev-server:start', (options) =>
      startDevServer({ options, webpackConfig })
    )
  }

  return config;
};



// module.exports = (on, config) => {
//   addMatchImageSnapshotPlugin(on, config);

//   if (config.testingType === 'component') {
//     const { startDevServer } = require('@cypress/webpack-dev-server')

//     // Your project's Webpack configuration
//     const webpackConfig = require('../../webpack.config.test.js')

//     on('dev-server:start', (options) =>
//       startDevServer({ options, webpackConfig })
//     )
//   }

//   return config
// }

require('@applitools/eyes-cypress')(module);
