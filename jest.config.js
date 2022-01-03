module.exports = {
    name: 'unit',
    displayName: 'Unit tests',
    preset: 'ts-jest',
    transform: {
        '^.+\\.(t|j)sx?$': 'ts-jest',
    },
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{ts,tsx}',
        '!<rootDir>/src/**/__generated__/*', // ignore generated files
        '!<rootDir>/src/**/__tests__/**/*', // ignore tests
        '!<rootDir>/src/**/*.stories.*', // ignore storybook
        '!<rootDir>/src/testingUtils/**/*', // ignore utils used for testing
        '!<rootDir>/src/models/**/*', // ignore typescript models
        '!<rootDir>/src/typings/**/*', // ignore misc typings
        '!<rootDir>/src/styles/**/*', // ignore styles
        '!<rootDir>/src/locales/**/*', // ignore locales
        '!<rootDir>/src/**/*.styled.{ts,tsx}', // ignore styled components files
    ],
    testRegex: '/__tests__/.*\\.(ts|tsx)$',
    testPathIgnorePatterns: ['/dist'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', '<rootDir>src/testingUtils/setupTests.ts'],
    globalSetup: '<rootDir>/src/global-setup.ts',
    coveragePathIgnorePatterns: ['/node_modules/'],
    moduleNameMapper: {
        '^~(.*)$': '<rootDir>/src$1',
        '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.ts',
    },
    coverageDirectory: 'coverage',
    coverageReporters: ['lcov'],
};
