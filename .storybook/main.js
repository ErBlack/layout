require('dotenv').config();

const userDir = process.env.USER_DIR || process.env.USER;

module.exports = {
    stories: [`../src/${userDir}/**/*.stories.@(tsx|jsx)`],
    addons: ['@storybook/addon-essentials'],
    framework: '@storybook/react',
};
