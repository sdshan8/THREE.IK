import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'demo/index.js',
  external: ['three'],
  output: [{
    file: './demo/build.js',
    format: 'umd',
    name: 'App',
    globals: {
      'three': 'THREE',
    },
  }],
  plugins: [
    nodeResolve(),
    commonjs()
  ],
};
