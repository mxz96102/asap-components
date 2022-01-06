const path = require('path');

module.exports = {
  entry: {
    time: './source/asap-time.js',
    'asap-loader': './source/asap-loader.js'
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].min.js',
  },
};