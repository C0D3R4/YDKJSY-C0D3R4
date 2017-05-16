module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname +'/build'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: './build',
    inline: true
  }
}
