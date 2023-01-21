const userDir = require('./userDir');
const { resolve } = require('path');

module.exports = {
    stories: [`../src/${userDir}/**/*.stories.tsx`],
    core: { builder: 'webpack5' },
    addons: ['@storybook/addon-essentials'],
    framework: '@storybook/react',
    webpackFinal: config => {
        config.resolve.alias['lib'] = resolve('./lib');

        return config;
    },
};
