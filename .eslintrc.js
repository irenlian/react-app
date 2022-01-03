module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    ignorePatterns: ['config/*'],
    plugins: ['@typescript-eslint', 'testing-library', 'jest-dom', 'graphql', 'react-hooks', 'prettier'],
    extends: [
        'airbnb-typescript',
        'plugin:testing-library/react',
        'plugin:jest-dom/recommended',
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'prettier/react',
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    env: {
        node: true,
        browser: true,
        jest: true,
    },
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'prettier/prettier': 'error',
        'import/no-unresolved': 'off',
        'import/no-named-as-default': 0,
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'react/destructuring-assignment': 'off',
        '@typescript-eslint/explicit-function-return-type': [
            'error',
            { allowExpressions: true, allowTypedFunctionExpressions: true },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/camelcase': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    '.storybook/**',
                    'src/stories/**',
                    '**/__tests__/**',
                    '**/testUtils.tsx',
                    'src/testingUtils/queries.ts',
                    '**/ldMockProvider.tsx',
                    'config/*',
                ],
            },
        ],
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'import/named': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'arrow-parens': ['error', 'as-needed'],
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
};
