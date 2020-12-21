const path = require('path');

module.exports = {
  entry: './src/ics.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ics.min.js',
    library: 'ics',
  },
};
