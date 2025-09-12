import * as path from 'path';
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSvgr } from '@rsbuild/plugin-svgr';

export default defineConfig({
  html: {
    favicon: "./src/assets/favicon.ico",
    meta: {
      description: `André Pacheco's Portfolio`,
    },
    template: "./src/assets/index.html",
  },
  plugins: [
    pluginReact(),
    pluginSvgr(),
  ],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
});
