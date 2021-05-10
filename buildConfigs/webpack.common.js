const path = require('path');

module.exports = {
  // './src/index.ts'
  entry: path.resolve(__dirname, '../src/index.ts'),
  // output: {
  //   filename: '[name].bundle.js',
  //   path: path.resolve(__dirname, '../dist'),
  //   clean: true,
  // },
  // devtool: "source-map",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      // loader: "ts-loader"
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      // loader: "source-map-loader"
      { test: /\.js$/, use: "source-map-loader", exclude: /node_modules/ },
    ],
  },
};