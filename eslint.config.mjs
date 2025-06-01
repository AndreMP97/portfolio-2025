import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
// import tailwindcss from "eslint-plugin-tailwindcss";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: "module",
        ecmaVersion: 2022,
        ecmaFeatures: {
          jsx: true,
        },
        project: "./tsconfig.json", // optional if you use rules that require type info
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      // tailwindcss,
    },
    rules: {
      // TypeScript rules
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",

      // React rules
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "warn",

      // React Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Accessibility
      "jsx-a11y/anchor-is-valid": "warn",

      // Tailwind CSS
      // "tailwindcss/classnames-order": "warn",

      // Sorting keys in objects
      "sort-keys": ["error", "asc", { caseSensitive: false, natural: true }],
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
