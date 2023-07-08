/* eslint-env node */

export default {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true,
    commonjs: true,
  },
  overrides: [
    {
      env: { node: true },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: { sourceType: 'script' },
    },
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'react', 'import', 'sort-exports'],
  // globals: { process: true },
  rules: {
    // indent: ['error', 2],
    'max-len': [
      'error',
      {
        code: 190,
        tabWidth: 2,
        ignoreComments: true, // "comments": 80
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-unused-vars': 'off',
    'prefer-template': 'error',
    'prefer-arrow-callback': 'off',
    'arrow-body-style': 2,
    'no-empty-function': 'off',
    'no-debugger': 'warn',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    'import/newline-after-import': 2,
    'import/no-duplicates': 'error',
    'import/first': 2,
    'import/extensions': ['warn', 'never', { js: 'never', jsx: 'never' }],
    'import/exports-last': 2,
    'import/order': [
      2,
      {
        pathGroups: [
          { pattern: 'react', group: 'builtin' },
          { pattern: '@*/**', group: 'internal' },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'never',
        groups: ['external', 'builtin', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
      },
    ],
    // 'import/no-unresolved': [
    //   'error',
    //   { caseSensitive: true, caseSensitiveStrict: true },
    // ],
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['all', 'single', 'multiple', 'none'],
        allowSeparatedGroups: false,
      },
    ],
    'sort-exports/sort-exports': ['error', { sortDir: 'asc' }],
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     // 'trailingComma': 'es5',
    //     // 'tabWidth': 2,
    //     // 'semi': true,
    //     // 'singleQuote': false,
    //     // 'jsxSingleQuote': true,
    //     // 'jsxBracketSameLine': false,
    //     // 'bracketSpacing': true,
    //     // 'arrowParens': 'always',
    //     // 'parser': 'typescript',
    //     // 'endOfLine': 'auto',
    //     'printWidth': 40,
    //     // 'proseWrap': 'preserve',
    //     // 'htmlWhitespaceSensitivity': 'css',
    //     // 'embeddedLanguageFormatting': 'off',
    //     // 'quoteProps': 'as-needed'
    //   },
    //   {
    //     'parser': 'typescript'
    //   }
    // ],
  },
};
