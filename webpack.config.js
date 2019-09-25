const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const pkg = require('./package.json');

module.exports = {
  entry: ['./src/index'],
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.min.js',
    library: pkg.name,
    libraryTarget: 'umd',
    publicPath: '/',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000000,
              mimetype: 'application/font-woff',
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000000,
              mimetype: 'application/octet-stream',
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000000,
              mimetype: 'image/svg+xml',
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000000,
              mimetype: 'application/vnd.ms-fontobject',
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [path.resolve('./'), path.resolve('./node_modules')],
    extensions: ['.js'],
    alias: {
      assets: path.resolve(__dirname, './src/assets'),
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
  devServer: {
    contentBase: './build',
    hot: true,
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /(en)/),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CopyWebpackPlugin([{ from: './src/index.d.ts', to: './index.d.ts' }]),
  ],
};
