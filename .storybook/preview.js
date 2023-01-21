export const parameters = {
    options: {
        storySort: {
            method: 'alphabetical',
        },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        expanded: true,
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
        sort: 'requiredFirst',
    },
};
