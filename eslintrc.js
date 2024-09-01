module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'airbnb-base',
        'prettier',
    ],
    rules: {
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
};
