import css from 'rollup-plugin-css-porter';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import path from 'path';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import replace from 'rollup-plugin-replace';
import image from '@rollup/plugin-image';
import copy from 'rollup-plugin-copy';

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

// export default {
//   input: ['src/index.ts'],
//   preserveModules: false,
//   output: [
//     {
//       file: pkg.main,
//       sourcemapPathTransform: (relativePath) => path.relative('src', relativePath),
//       format: 'cjs',
//       sourcemap: false,
//     },
//     {
//       file: pkg.browser,
//       name: 'InPlayerUI',
//       format: 'umd',
//       sourcemapPathTransform: (relativePath) => path.relative('src', relativePath),
//       sourcemap: false,
//     },
//     {
//       file: pkg.module,
//       format: 'es',
//       sourcemapPathTransform: (relativePath) => path.relative('src', relativePath),
//       sourcemap: false,
//     },
//   ],
//   external: makeExternalPredicate(
//     Object.keys(pkg.peerDependencies || {}).concat(Object.keys(pkg.dependencies || {}))
//   ),
//   plugins: [],
// };

export const getRollupConfig = ({ pwd, buildName, name }) => {
  const SOURCE_DIR = path.resolve(pwd, 'src');
  const DIST_DIR = path.resolve(pwd, 'dist');
  const input = `${SOURCE_DIR}/index.ts`;
  const external = (id) => !id.startsWith('.') && !id.startsWith('/');
  const extensions = ['.js', '.jsx', '.ts', '.tsx', '.css'];
  const getBabelOptions = ({ useESModules }) => ({
    exclude: '**/node_modules/**',
    runtimeHelpers: true,
    configFile: path.join(pwd, './babel.config.js'),
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    plugins: [
      'babel-plugin-annotate-pure-calls',
      ['@babel/plugin-transform-runtime', { useESModules }],
    ],
  });

  const globals = {
    react: 'React',
    'react-dom': 'ReactDom',
    'styled-components': 'styled',
  };

  const plugins = [
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/styled-components-modifiers/lib/index.js': ['applyStyleModifiers'],
        'node_modules/react-dates/index.js': ['DateRangePicker', 'SingleDatePicker'],
        'node_modules/react-dom/index.js': ['findDOMNode', 'createPortal'],
        'node_modules/react/index.js': [
          'Component',
          'PureComponent',
          'Fragment',
          'cloneElement',
          'forwardRef',
          'createElement',
          'createFactory',
          'Children',
          'createContext',
          'createRef',
          'isValidElement',
          'lazy',
          'memo',
          'Suspense',
          'Profiler',
          'StrictMode',
          'useContext',
          'useDebugValue',
          'useImperativeHandle',
          'useMemo',
          'useReducer',
          'useRef',
          'useState',
          'useLayoutEffect',
          'useEffect',
          'useCallback',
          'version',
        ],
      },
    }),
    resolve({ extensions }),
    image(),
    css({
      dest: './dist/styles.css',
      minified: true,
    }),
    // babel({
    //   babelHelpers: 'runtime',
    //   extensions,
    //   include: ['src/**/*'],
    //   exclude: 'node_modules/**',
    //   babelrc: true,
    // }),
    terser({
      compress: {
        passes: 10,
      },
    }),
    replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    copy({
      targets: [{ src: './index.d.ts', dest: 'dist' }],
    }),
  ];

  const umdConfig = {
    input,
    output: {
      file: `${DIST_DIR}/${buildName}.umd.js`,
      format: 'umd',
      name,
      globals,
    },
    external: Object.keys(globals),
    plugins: [...plugins, babel(getBabelOptions({ useESModules: false }))],
  };

  const minConfig = {
    input,
    output: {
      file: `${DIST_DIR}/${buildName}.min.js`,
      format: 'umd',
      name,
      globals,
    },
    external: Object.keys(globals),
    plugins: [...plugins, babel(getBabelOptions({ useESModules: true }))],
  };

  const cjsConfig = {
    input,
    output: { file: `${DIST_DIR}/${buildName}.cjs.js`, format: 'cjs' },
    external,
    plugins: [...plugins, babel(getBabelOptions({ useESModules: false }))],
  };

  const esmConfig = {
    input,
    output: { file: `${DIST_DIR}/${buildName}.es.js`, format: 'esm' },
    external,
    plugins: [...plugins, babel(getBabelOptions({ useESModules: true }))],
  };

  return [esmConfig, cjsConfig, umdConfig, minConfig];
};
