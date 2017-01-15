module.exports = {
  env: {
    browser: true
  },
  extends: [
    'standard'
  ],
  parser: 'babel-eslint',
  plugins: [
    'ocd'
  ],
  rules: {
    'ocd/sort-import-declaration-specifiers': 2,
    'ocd/sort-import-declarations': [
      2,
      {
        'localPrefixes': [
          '../',
          './'
        ]
      }
    ],
    'ocd/sort-variable-declarator-properties': 2
  }
}
