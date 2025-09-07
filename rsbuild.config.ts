import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  html: {
    favicon: "./src/assets/favicon.ico",
    meta: {
      description: `André Pacheco's Portfolio`,
    },
    template: './src/assets/index.html',
  },
  plugins: [pluginReact()],
});
