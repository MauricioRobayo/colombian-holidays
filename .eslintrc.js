module.exports = {
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  env: {
    jest: true
  },
  rules: {
    "require-jsdoc": "error",
    "valid-jsdoc": "error"
  }
};
