const webpack = require('webpack');
const path = require('path');
// React v.16 uses some newer JS functionality, so to ensure everything
// works across all browsers, we're adding babel-polyfill here.

module.exports = {
  entry: ['./src/index'],
  module: {
    rules: [{ test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ }],
  },
  resolve: {
    modules: [path.resolve('./src'), path.resolve('./node_modules')],
    extensions: ['.js'],
    alias: {
      components: path.resolve(__dirname, './src/components'),
      blocks: path.resolve(__dirname, './src/blocks'),
      elements: path.resolve(__dirname, './src/elements'),
      modifiers: path.resolve(__dirname, './src/modifiers'),
      utils: path.resolve(__dirname, './src/utils'),
      helpers: path.resolve(__dirname, './src/helpers'),
    },
  },
  output: {
    path: path.join(__dirname, '/docs'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devtool: 'eval',
  devServer: {
    contentBase: './docs',
    hot: true,
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
