// plugins that we are going to use
import babel from 'rollup-plugin-babel';
import copy from 'rollup-plugin-copy';
import flow from 'rollup-plugin-flow';
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import includePaths from 'rollup-plugin-includepaths'

import pkg from './package.json'

// list of plugins used during building process
const plugins = targets => ([
  // remove flow annotations from output
  flow(),
  // use Babel to transpile to ES5
  babel({
    // ignore node_modules/ in transpilation process
    exclude: 'node_modules/**',
    // ignore .babelrc (if defined) and use options defined here
    babelrc: false,
    // use recommended babel-preset-env without es modules enabled
    // and with possibility to set custom targets e.g. { node: '8' }
    presets: [
      '@babel/preset-flow',
      ['@babel/env', { modules: false, targets}],
    ],
    // solve a problem with spread operator transpilation https://github.com/rollup/rollup/issues/281
    plugins: [
      "@babel/plugin-syntax-export-namespace-from",
      ["@babel/plugin-proposal-class-properties", { "loose": true }],
    ],
    // removes comments from output
    comments: false,
  }),
  // copy Flow definitions from source to destination directory
  copy({
    files: [
      'src/*.flow',
    ],
    dest: 'lib',
  }),
  external(),
  resolve(),
  includePaths({
    include: {},
    paths: ['src'],
  }),
]);

export default [{
  input: 'src/index.js',
  output: {
    file: pkg.main,
    format: 'cjs',
    sourcemap: true,
  },
  // build common JS for node 6
  plugins: plugins({
    node: 'current',
  }),
}];
