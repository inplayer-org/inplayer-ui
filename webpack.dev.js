const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/app.js'),
  output: {
    filename: 'paywall-previews.min.js',
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    open: true,
    quiet: true,
    hot: true,
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
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
        test: /\.(jpe?g|png|gif|ico|svg)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(css)$/,
        include: [/stylesheets/, /node_modules/],
        use: ['css-loader'],
      },
      {
        test: /\.css$/,
        exclude: [/stylesheets/, /node_modules/],
        use: ['css-loader?sourceMap&modules,localIdentName=[local]-[hash:base64]'],
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
    extensions: ['.ts', '.tsx', '.js', 'jsx', '.json'],
    alias: {
      assets: path.resolve(__dirname, './src/assets'),
      previews: path.resolve(__dirname, './src/previews'),
      components: path.resolve(__dirname, './src/components'),
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      // Create HTML file that includes references to bundled CSS and JS.
      template: path.resolve(__dirname, './public/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      inject: true,
    }),
  ],
};
