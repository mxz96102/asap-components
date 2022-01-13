const path = require('path');

module.exports = {
  entry: {
    time: './source/time/index.js',
    'asap-loader': './source/loader/index.js',
    gcanvas: './source/gcanvas/gcanvas.js',
    gwebgl: './source/gcanvas/gwebgl.js',
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].min.js',
  },
  optimization: {
    usedExports: true,
  },
};