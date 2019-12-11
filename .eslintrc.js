module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': 'off',
    'max-len': 'off',
    'import/no-cycle': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  globals: {
    Model: true,
    Utils: true,
  },
};
