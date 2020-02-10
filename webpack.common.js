function createWebpackConfig(config) {
  const defaults = {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        },
        {
          test: /\.mdx?$/,
          use: ['babel-loader', '@mdx-js/loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.json'],
    },
  };

  return Object.assign({}, defaults, config);
};

exports.createWebpackConfig = createWebpackConfig;
