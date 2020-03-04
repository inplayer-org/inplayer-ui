import pkg from './package.json';

export default {
  title: 'InPlayer UI',
  src: './src',
  files: '*.{mdx}',
  description: pkg.description,
  base: `/${pkg.name}/`,
  version: pkg.version,
};
