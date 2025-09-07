import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettierConfig from "eslint-config-prettier";
import tsSortKeys from "eslint-plugin-typescript-sort-keys";

export default [
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: "module",
        ecmaVersion: 2022,
        ecmaFeatures: { jsx: true },
        project: "./tsconfig.json", // Required for type-aware rules
      },
    },
    settings: {
      react: { version: "detect" },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      "typescript-sort-keys": tsSortKeys,
    },
    rules: {
      // TypeScript rules
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/strict-boolean-expressions": "error",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/no-unnecessary-type-assertion": "warn",
      "@typescript-eslint/no-explicit-any": "off",

      // React rules
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "warn",

      // React Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Accessibility
      "jsx-a11y/anchor-is-valid": "warn",

      // Sorting keys in objects
      "sort-keys": ["error", "asc", { caseSensitive: false, natural: true }],

      // Sorting keys in TypeScript interfaces
      "typescript-sort-keys/interface": "error",
    },
  },
  {
    files: ["**/*.{js,jsx,ts,tsx,json,css,md}"],
    ...prettierConfig,
  },
  {
    ignores: ["node_modules", "dist", "build"],
  },
];
