const { resolve } = require('path')

module.exports = {
  verbose: false,
  cache: false,
  globals: {
    'ts-jest': {
      'tsConfigFile': './tsconfig.test.json',
      'useBabelrc': true
    },
    // "window": true
  },
  // setupFiles: [
  //   "../jestsetup.ts"
  // ],
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
    '\\.(scss)$': 'jest-css-modules',
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: "/test/unit/specs/.*\\.(test|spec)\\.(ts|tsx)$",
  // testMatch: ['<rootDir>/test/.*\\.(test|spec)\\.(ts|tsx)$'],
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  // collectCoverageFrom: [
  //   'src/**/*.{ts,tsx}',
  //   '!src/index.ts',
  //   '!src/mixins.ts',
  //   '!@types/**',
  //   '!**/node_modules/**'
  // ]
}