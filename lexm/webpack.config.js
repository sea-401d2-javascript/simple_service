module.exports = {
  entry: __dirname + '/app/js/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  }
}
