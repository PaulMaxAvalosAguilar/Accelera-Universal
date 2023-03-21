import solid from 'vite-plugin-solid';
import ssr from 'vite-plugin-ssr/plugin';
import { UserConfig } from 'vite';

const config: UserConfig = {
  plugins: [solid({ ssr: true }), ssr({ prerender: true })],

  build: {
    // @ts-ignore
    polyfillDynamicImport: false,
  },

  resolve: {
    alias: {
      '#root': __dirname,
    },
  },
};

export default config;
