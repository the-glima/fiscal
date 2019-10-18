module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "app/**/*.ts",
  ],
  coverageDirectory: 'test/static/coverage',
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  verbose: true,
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: [7053, 2339]
      }
    }
  }
}
