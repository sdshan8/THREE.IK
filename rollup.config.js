import { rollup } from 'rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';

export default {
  input: 'src/index.js',
  external: ['three'],
  output: [
    {
      file: './build/three-ik.js',
      format: 'umd',
      name: 'IK',
      globals: {
        'three': 'THREE',
      },
    },
    {
      file: './build/three-ik.module.js',
      format: 'es',
    },
  ],
  watch: {
    include: 'src/**',
  },
  plugins: [
    babel({
      babelHelpers: 'bundled', // Replaces the old 'external-helpers' plugin
      exclude: 'node_modules/**',
    }),
    nodeResolve(),
    commonjs(),
  ],
};
