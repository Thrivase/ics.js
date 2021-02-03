// const path = require('path');

// module.exports = {
//   entry: './src/ics.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'ics.min.js',
//     library: 'ics',
//   },
// };

const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/ics.js',
  output: {
    library: 'ics',
    path: path.resolve('dist'),
    filename: 'ics.min.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};