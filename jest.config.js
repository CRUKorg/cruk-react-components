module.exports = {
  testMatch: ['<rootDir>/src/*/__tests__/**/*.jest.ts'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!<rootDir>/node_modules/', '!<rootDir>/path/to/dir/'],
  modulePaths: ['<rootDir>'],
  moduleDirectories: ['<rootDir>', 'node_modules'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  coverageReporters: ['text'],
};
