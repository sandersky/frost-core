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
      dir : 'coverage/',
      reporters: [
        {type: 'html', subdir: 'html'},
        {type: 'lcovonly', subdir: 'lcov'}
      ]
    },
    files: [
      'src/**/*.js',
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
    reporters: ['progress', 'coverage'],
    singleRun: true
  })
}
