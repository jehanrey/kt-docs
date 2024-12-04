import pluginJs from '@eslint/js'
import eslintPluginAstro from 'eslint-plugin-astro'
import importPlugin from 'eslint-plugin-import'
import globals from 'globals'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx,astro}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.config({
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  }),
  ...eslintPluginAstro.configs.recommended,
  {
    plugins: { import: importPlugin },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['sibling', 'parent'],
            'index',
            'unknown',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
]
