const path = require('path');

// app's webpack.config.js
const customWebpackConfig = require('../webpack.config.js');

module.exports = {
  stories: ['../src/**/*.stories.(tsx|mdx)'],
  addons: ['@storybook/addon-docs'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
        },
      ],
    });

    customWebpackConfig.resolve.extensions.push('.ts', '.tsx');

    return {
      ...config,
      resolve: customWebpackConfig.resolve,
    };
  },
};
