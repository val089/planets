module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/standard', 'plugin:prettier/recommended', 'prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        printWidth: 100,
        useTabs: false,
        singleQuote: true,
        endOfLine: 'auto',
        trailingComma: 'es5',
      },
    ],
    'no-console': 1
  },
};
