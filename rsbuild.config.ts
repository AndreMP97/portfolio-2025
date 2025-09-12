import * as path from "path";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSvgr } from "@rsbuild/plugin-svgr";

export default defineConfig({
  html: {
    favicon: "./src/assets/favicon.ico",
    meta: {
      charset: { charset: "UTF-8" },
      description: "André Pacheco's Portfolio",
      keywords:
        "André Pacheco, Portfolio, Software Engineer, Web Developer, Frontend Developer, JavaScript, TypeScript, React.js, React.Native, Node.js, HTML, CSS",
      viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
    },
    template: "./src/assets/index.html",
    title: "André Pacheco - Portfolio",
  },
  performance: {
    /* bundleAnalyze: {
      analyzerMode: "static",
      reportFilename: "bundle-report.html",
    }, */
    prefetch: {
      type: "async-chunks",
    },
    preload: {
      include: (filename) => /\.(woff2?|webp)$/i.test(filename),
      type: "all-assets",
    },
    removeConsole: true,
  },
  plugins: [pluginReact(), pluginSvgr()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
});
