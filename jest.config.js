module.exports = {
  testEnvironment: "node",
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  transform: {}, // no need to use babel
  collectCoverageFrom: ["src/**/*.js"]
};
