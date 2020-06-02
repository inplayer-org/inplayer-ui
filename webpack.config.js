const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './src/umd.ts',
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
  output: {
    filename: 'inplayer-ui.min.js',
    path: path.join(__dirname, '/dist/umd'),
    library: 'InPlayerUI',
    libraryTarget: 'umd',
    publicPath: '/',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.(jpe?g|png|gif|ico|svg)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
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
    ],
  },
  resolve: {
    modules: [path.resolve('./'), path.resolve('./node_modules')],
    extensions: ['.ts', '.tsx', '.js', 'jsx', '.json'],
    alias: {
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      modifiers: path.resolve(__dirname, './src/modifiers'),
      theme: path.resolve(__dirname, './src/theme'),
      'paywall-previews': path.resolve(__dirname, './src/paywall-previews'),
    },
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /(en)/),
    new CopyWebpackPlugin([{ from: './src/index.d.ts', to: './index.d.ts' }]),
    new BundleAnalyzerPlugin(),
  ],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'styled-components': 'styled-components',
  },
};
