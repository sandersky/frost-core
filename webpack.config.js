module.exports = {
  entry: './src/index.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          plugins: [
            'transform-export-extensions',
            'transform-es2015-modules-umd'
          ],
          presets: ['es2015']
        }
      }
    ]
  },
  output: {
    filename: 'dist/frost-core.js'
  }
}
