import { join } from "path";

export default {
  entry: "./src/index.js",
  output: {
    path: join(__dirname, "dist"),
    libraryTarget: "umd",
    library: "pascua"
  },
  devtool: "source-map",
  module: {
    rules: [{ test: /\.js$/, use: "babel-loader" }]
  }
};
