"use strict";

let Path = require("path")
let Webpack = require("webpack")

module.exports = {
  // webpack.github.io/docs/configuration.html#target
  target: "web",

  // webpack.github.io/docs/configuration.html#entry
  entry: {
    bundle: "./src/app",
  },

  output: {
    // webpack.github.io/docs/configuration.html#output-path
    path: Path.resolve(__dirname, "public"),

    // webpack.github.io/docs/configuration.html#output-filename
    filename: "bundle.js",

    // webpack.github.io/docs/configuration.html#output-publicpath
    publicPath: "/",

    // webpack.github.io/docs/configuration.html#output-pathinfo
    pathinfo: true,
  },

  // webpack.github.io/docs/configuration.html#debug
  debug: true,

  // webpack.github.io/docs/configuration.html#devtool
  devtool: "source-map",

  // webpack.github.io/docs/configuration.html#module
  module: {
    loaders: [ // webpack.github.io/docs/loaders.html
      // CSS: github.com/webpack/css-loader
      {test: /\.(css(\?.*)?)$/, loaders: ["style", "css"]},

      // LESS: github.com/webpack/less-loader
      {test: /\.(less(\?.*)?)$/, loaders: ["style", "css", "less"]},
    ],
  },
}
