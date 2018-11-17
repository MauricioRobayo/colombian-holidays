const { join } = require("path");

module.exports = [
  {
    mode: "development",
    entry: "./src/pascua.js",
    output: {
      path: join(__dirname, "dist"),
      filename: "pascua.umd.js",
      libraryTarget: "umd",
      library: "pascua"
    },
    devtool: "source-map",
    module: {
      rules: [{ test: /\.js$/, use: "babel-loader" }]
    }
  },
  {
    mode: "production",
    entry: "./src/pascua.js",
    output: {
      path: join(__dirname, "dist"),
      filename: "pascua.umd.min.js",
      libraryTarget: "umd",
      library: "pascua"
    },
    devtool: "source-map",
    module: {
      rules: [{ test: /\.js$/, use: "babel-loader" }]
    }
  }
];
