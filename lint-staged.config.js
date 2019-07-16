module.exports = {
  "src/**/*.js": ["eslint --fix", "git add", "jest --bail --findRelatedTests"],
  "**/*.{js,ts,css,less,scss,vue,json,gql,md,yml,yaml}": [
    "prettier --write",
    "git add"
  ]
};
