import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginJest from "eslint-plugin-jest";
import pluginPrettier from "eslint-plugin-prettier";

export default [
  pluginJs.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: {
        localStorage: "readonly",
        fetch: "readonly",
        console: "readonly",
        document: "readonly",
        alert: "readonly",
        describe: "readonly",
        test: "readonly",
        it: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly",
        jest: "readonly",
      },
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the react version
      },
      jest: {
        version: 29, // Specify the Jest version
      },
    },
    plugins: {
      react: pluginReact,
      jest: pluginJest,
      prettier: pluginPrettier,
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...pluginJest.configs.recommended.rules,
      "prettier/prettier": "error",
    },
  },
];
