import path from 'path';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';
import filesize from 'rollup-plugin-filesize';
import autoprefixer from 'autoprefixer';
import localResolve from 'rollup-plugin-local-resolve';
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
  postcss({
    plugins: [autoprefixer],
    extract: 'styles.css',
  }),
  image(),
  babel({
    include: ['src/**/*'],
    exclude: 'node_modules/**',
    babelHelpers: 'bundled',
    extensions,
  }),
  localResolve(),
  resolve({
    mainFields: ['module', 'main', 'jsnext:main', 'browser'],
    extensions,
  }),
  commonjs(),
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
