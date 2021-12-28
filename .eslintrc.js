module.exports = {
  env: { browser: true, es2021: true },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  plugins: ['react', '@typescript-eslint', 'unused-imports'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'import/no-unresolved': 'off', // Let TypeScript handle this
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          {
            pattern: '*.css',
            patternOptions: { matchBase: true },
            group: 'object',
            position: 'after',
          },
          {
            pattern: '*.svg',
            patternOptions: { matchBase: true },
            group: 'object',
            position: 'after',
          },
        ],
        warnOnUnassignedImports: true,
        groups: [
          'external',
          ['index', 'sibling', 'parent'],
          'internal',
          ['type', 'unknown', 'object'],
        ],
      },
    ],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/no-unescaped-entities': 'off', // Maybe enable this one?
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'import/extensions': [
      'error',
      { ts: 'never', tsx: 'never', config: 'always', css: 'always' },
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
  },
}
