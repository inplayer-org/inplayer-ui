// React v.16 uses some newer JS functionality, so to ensure everything
// works across all browsers, we're adding babel-polyfill here.
// The polyfill must be at the top of the entry point to ensure the polyfills are loaded first.
require('@babel/polyfill');

const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const pkg = require('./package.json');

module.exports = {
  entry: ['./src/index'],
  module: {
    rules: [{ test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ }],
  },
  resolve: {
    modules: [path.resolve('./'), path.resolve('./node_modules')],
    extensions: ['.js'],
    alias: {
      components: path.resolve(__dirname, './src/components'),
      blocks: path.resolve(__dirname, './src/blocks'),
      elements: path.resolve(__dirname, './src/elements'),
      modifiers: path.resolve(__dirname, './src/modifiers'),
      utils: path.resolve(__dirname, './src/utils'),
      helpers: path.resolve(__dirname, 'tests/helpers'),
      config: path.resolve(__dirname, './src/config'),
      types: path.resolve(__dirname, './src/types'),
      theme: path.resolve(__dirname, './src/theme'),
    },
  },
  output: {
    path: path.join(__dirname, '/build'),
    library: pkg.name,
    libraryTarget: 'commonjs2',
    publicPath: '/',
    filename: 'bundle.js',
    umdNamedDefine: true,
  },
  devtool: 'eval',
  devServer: {
    contentBase: './build',
    hot: true,
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /(en)/),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new CopyWebpackPlugin([{ from: './src/index.d.ts', to: './index.d.ts' }]),
  ],
};
