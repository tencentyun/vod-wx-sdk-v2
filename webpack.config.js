const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/vod.js",
  output: {
    filename: "vod-wx-sdk-v2.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "commonjs"
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  },
  optimization: {
    minimize: false
  }
};
