module.exports = {
  extends: 'airbnb',
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'always',
      },
    ],
    'max-len': 'off',
    'no-restricted-syntax': 0,
    'no-console': 'off',
    'no-await-in-loop': 'off'
  },
};
