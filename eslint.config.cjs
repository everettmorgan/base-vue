/* eslint-disable */

const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({ baseDirectory: __dirname });

module.exports = [
  ...compat.extends('plugin:vue/recommended', 'airbnb-base'),

  {
    files: ['**/*.spec.ts', '**/*.js'],
    rules: {
      'no-undef': 'off',
      'import/no-extraneous-dependencies': 'warn',
      'global-require': 'warn'
    }
  },

  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: require('vue-eslint-parser'),
      parserOptions: {
        parser: require('@typescript-eslint/parser'),
        ecmaVersion: 2020,
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
      },
    },
    plugins: {
      vue: require('eslint-plugin-vue'),
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    },
    rules: {
      'no-unused-vars': 'off',
      'vue/multi-word-component-names': 'warn'
    },
  },

  {
    files: ['**/*.{ts,tsx,d.ts,cjs}'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
    },
    plugins: {
      vue: require('eslint-plugin-vue'),
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    },
    rules: {
      'no-restricted-exports': 'off',
      'no-loss-of-precision': 'off',
      'no-promise-executor-return': 'off',
      'no-unreachable-loop': 'off',
      'no-unsafe-optional-chaining': 'off',
      'no-useless-backreference': 'off',
      'default-case-last': 'off',
      'no-nonoctal-decimal-escape': 'off',
      'import/extensions': 'off',
      'class-methods-use-this': 'off',
      'import/no-unresolved': 'off',
      'import/no-extraneous-dependencies': 'warn',
    },
  },
];
