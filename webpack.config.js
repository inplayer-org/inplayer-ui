const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const pkg = require('./package.json');

module.exports = {
  entry: {
    main: './src/index.ts',
    Accordion: './src/components/index.ts',
    Avatar: './src/components/Avatar/index.ts',
    Button: './src/components/Button/index.ts',
    Card: './src/components/Card/index.ts',
    Checkbox: './src/components/Checkbox/index.ts',
    DatePicker: './src/components/DatePicker/index.ts',
    DayPicker: './src/components/DayPicker/index.ts',
    Dropdown: './src/components/Dropdown/index.ts',
    Input: './src/components/Input/index.ts',
    Label: './src/components/Label/index.ts',
    Loader: './src/components/Loader/index.ts',
    Modal: './src/components/Modal/index.ts',
    Navbar: './src/components/NavBar/index.ts',
    Note: './src/components/Note/index.ts',
    Notification: './src/components/Notification/index.ts',
    Pagination: './src/components/Pagination/index.ts',
    PillLabel: './src/components/PillLabel/index.ts',
    Progress: './src/components/Progress/index.ts',
    Radio: './src/components/Radio/index.ts',
    StepWizard: './src/components/StepWizard/index.ts',
    Switch: './src/components/Switch/index.ts',
    Table: './src/components/Table/index.ts',
    TabNavigation: './src/components/TabNavigation/index.ts',
    Tabs: './src/components/Tabs/index.ts',
    TextArea: './src/components/TextArea/index.ts',
    Tooltip: './src/components/Tooltip/index.ts',
    Typography: './src/components/Typography/index.ts',
    UserMenu: './src/components/UserMenu/index.ts',
    Preview1: './src/paywall-previews/Preview1/index.ts',
    Preview2: './src/paywall-previews/Preview2/index.ts',
    Preview3: './src/paywall-previews/Preview3/index.ts',
    Preview4: './src/paywall-previews/Preview4/index.ts',
    Preview5: './src/paywall-previews/Preview5/index.ts',
    Preview6: './src/paywall-previews/Preview6/index.ts',
    Preview7: './src/paywall-previews/Preview7/index.ts',
  },
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
    path: path.join(__dirname, '/lib'),
    filename: '[name].js',
    library: pkg.name,
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
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
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CopyWebpackPlugin([{ from: './src/index.d.ts', to: './index.d.ts' }]),
  ],
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'styled-components',
    },
  },
};
