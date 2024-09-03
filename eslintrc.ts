module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    '@nuxtjs',
    'airbnb-base',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
};
