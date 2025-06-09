module.exports = [
  {
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'script',
      globals: {
        jQuery: 'readonly',
        $: 'readonly',
        window: 'readonly',
        document: 'readonly',
        console: 'readonly'
      }
    },
    rules: {
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'no-unused-vars': ['warn'],
      'no-console': ['warn'],
      'no-trailing-spaces': ['error']
    }
  }
]; 