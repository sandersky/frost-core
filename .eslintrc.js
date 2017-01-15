module.exports = {
  env: {
    browser: true
  },
  extends: [
    'standard'
  ],
  parser: 'babel-eslint',
  plugins: [
    'mocha',
    'ocd'
  ],
  rules: {
    // eslint rules

    'camelcase': 2,
    'complexity': [2, 5],
    'object-curly-spacing': [2, 'never'],
    'valid-jsdoc': [
      2,
      {
        'prefer': {
          'virtual': 'abstract',
          'extends': 'augments',
          'constructor': 'class',
          'const': 'constant',
          'defaultvalue': 'default',
          'desc': 'description',
          'host': 'external',
          'fileoverview': 'file',
          'overview': 'file',
          'emits': 'fires',
          'func': 'function',
          'method': 'function',
          'var': 'member',
          'arg': 'param',
          'argument': 'param',
          'return': 'returns',
          'exception': 'throws'
        },
        'requireReturn': false
      }
    ],

    // eslint-plugin-mocha rules

    'mocha/handle-done-callback': 2,
    'mocha/no-exclusive-tests': 2,
    'mocha/no-global-tests': 2,
    'mocha/no-pending-tests': 2,
    'mocha/no-skipped-tests': 2,

    // eslint-plugin-ocd rules

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
