import path from 'path';
import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import pkg from './package.json';

const SOURCE_DIR = path.resolve(__dirname, 'src');
const INPUT_FILE_PATH = `${SOURCE_DIR}/index.ts`;
const OUTPUT_NAME = 'InPlayerUI';
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const GLOBALS = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'styled-components': 'styled-components',
};

const PLUGINS = [
  image(),
  resolve({
    mainFields: ['module', 'main', 'jsnext:main', 'browser'],
    extensions,
  }),
  commonjs(),
  babel({
    exclude: 'node_modules/**',
    extensions,
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
  }),
  terser(),
  filesize(),
  copy({
    targets: [{ src: './index.d.ts', dest: 'dist' }],
  }),
];

const EXTERNAL = ['react', 'react-dom', 'styled-components'];

const OUTPUT_DATA = [
  {
    file: pkg.browser,
    format: 'umd',
  },
  {
    file: pkg.main,
    format: 'cjs',
  },
  {
    file: pkg.module,
    format: 'es',
  },
];

const config = OUTPUT_DATA.map(({ file, format }) => ({
  input: INPUT_FILE_PATH,
  output: {
    file,
    format,
    name: OUTPUT_NAME,
    globals: GLOBALS,
  },
  external: EXTERNAL,
  plugins: PLUGINS,
}));

export default config;
