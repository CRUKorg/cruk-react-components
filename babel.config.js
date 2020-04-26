module.exports = function(api) {
  var isDev = api.env('development');
  return {
    sourceMaps: true,
    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      [
        'styled-components',
        {
          ssr: true,
          displayName: isDev,
          preprocess: false,
          pure: true,
        },
      ],
    ],
  };
};
