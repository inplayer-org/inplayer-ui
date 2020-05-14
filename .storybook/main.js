const path = require('path');

// your app's webpack.config.js
const custom = require('../webpack.prod.js');

module.exports = {
  stories: ['../src/**/*.stories.(tsx|mdx)'],
  addons: ['@storybook/addon-docs'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });

    config.resolve.extensions.push('.ts', '.tsx');

    return {
      ...config,
      resolve: custom.resolve,
    };
  },
  // webpackFinal: (config) => {
  //   return {
  //     ...config,
  //     module: { ...config.module, rules: custom.module.rules },
  //     resolve: custom.resolve,
  //   };
  // },
};
