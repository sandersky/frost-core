module.exports = function (config) {
  config.set({
    autoWatch: true,
    babelPreprocessor: {
      options: {
        plugins: [
          'istanbul',
          'transform-export-extensions',
          'transform-es2015-modules-umd'
        ],
        presets: ['es2015'],
        sourceMap: 'inline'
      }
    },
    basePath: '',
    browsers: ['Chrome'],
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {type: 'html', subdir: 'html'},
        {type: 'lcovonly', subdir: 'lcov'}
      ]
    },
    files: [
      // NOTE: for some reason when we include src/components the tests complain
      // that that createComponent doesn't exists on undefined in frost-button.
      // Since src/index.js actually imports the components and registers them
      // the tests still work as they don't need to explicitly import the
      // components.
      'src/dogma/**/*.js',
      'src/*.js',
      'tests/**/*.js'
    ],
    frameworks: [
      'mocha',
      'chai'
    ],
    preprocessors: {
      'src/**/*.js': ['babel'],
      'tests/**/*.js': ['babel']
    },
    reporters: ['mocha', 'coverage'],
    singleRun: true
  })
}
