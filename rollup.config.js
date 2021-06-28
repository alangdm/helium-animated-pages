import merge from 'deepmerge';
import { createMpaConfig } from '@open-wc/building-rollup';
import copy from 'rollup-plugin-copy';

const baseConfig = createMpaConfig({
  developmentMode: process.env.ROLLUP_WATCH === 'true',
  injectServiceWorker: false,
  html: {
    flatten: true,
  },
});

const plugins = [
  copy({
    targets: [
      { src: 'demo/custom-elements.json', dest: './dist' },
      { src: 'demo/.nojekyll', dest: './dist' },
    ],
    flatten: false,
  }),
];

export default merge(baseConfig, {
  input: 'demo/*.html',
  output: { dir: 'dist' },
  plugins,
});
