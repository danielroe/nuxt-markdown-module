module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    '@nuxtjs',
    'prettier/@typescript-eslint'
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser',

    project: './tsconfig.json'
  }
}
