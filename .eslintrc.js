module.exports = {
  env: {
    browser: true
  },
  extends: 'eslint-config-react-xyz',
  globals: {
    __DEV__: true,
    document: true,
    window: true
  },
  parser: 'babel-eslint',
  rules: {
    'import/prefer-default-export': 'off',
    'no-template-curly-in-string': 'off',
    'react/forbid-prop-types': 'off'
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['src', 'node_modules']
      }
    }
  }
};
