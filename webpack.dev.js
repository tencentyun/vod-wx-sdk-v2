const config = require("./webpack.config");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  ...config,
  output: {
    filename: "vod-wx-sdk-v2.js",
    path: path.resolve(__dirname, "demo/lib"),
    libraryTarget: "commonjs",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
  ],
};
