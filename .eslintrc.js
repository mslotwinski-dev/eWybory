const eslintConfig = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'explicit-module-boundary-types': 'off',
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': [
      'warn',
      { endOfLine: 'auto' },
      { usePrettierrc: true },
    ],
  },
}

module.exports = eslintConfig
