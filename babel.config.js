module.exports = {
  comments: false,
  presets: [
    "minify",
    [
      "@babel/env",
      {
        targets: "> 0.25%, not dead",
        modules: "umd"
      }
    ]
  ]
};
