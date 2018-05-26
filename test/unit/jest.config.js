const { resolve } = require('path')

module.exports = {
  globals: {
    'ts-jest': {
      'tsConfigFile': './tsconfig.test.json',
      'useBabelrc': true
    }
  },
  rootDir: resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
    'ts',
    'tsx'
  ],
  moduleNameMapper: {
    // '^@/(.*)$': '<rootDir>/src/$1',
    '@ferrymen/fm-ui-vue': '<rootDir>/src'
  },
  transform: {
    "\\.(scss)$": "jest-css-modules",
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: "/test/.*\\.(test|spec)\\.(ts|tsx)$"
}