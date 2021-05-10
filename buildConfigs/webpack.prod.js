const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  output: {
    filename: 'setutils.min.js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
  },
  mode: 'production',
});