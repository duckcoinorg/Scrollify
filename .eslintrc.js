module.exports = {
  env: {
    browser: true,
    es6: true,
    jquery: true
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'script'
  },
  globals: {
    jQuery: 'readonly',
    $: 'readonly'
  },
  rules: {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-unused-vars': ['warn'],
    'no-console': ['warn'],
    'no-trailing-spaces': ['error']
  }
}; 