const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    addons: ['@storybook/addon-actions', '@storybook/addon-links'],
    webpackFinal: config => ({
        ...config,
        resolve: {
            ...config.resolve,
            alias: { ...config.resolve.alias, '~': path.resolve(__dirname, '../src') },
        },
    }),
};
