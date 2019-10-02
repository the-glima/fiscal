module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts",
  ],
  coverageDirectory: 'test/static/coverage',
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  }, 
  verbose: true
}
