module.exports = {
  presets: [
    ['@babel/preset-env', { modules: false }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-classes',
    '@babel/plugin-proposal-private-methods',
    'babel-plugin-styled-components',
  ],
};
