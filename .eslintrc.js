module.exports = {
  'root': true,
  'env': {
    'node': true,
    'browser': true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'parser': 'babel-eslint'
  },
  'rules': {
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'vue/multi-word-component-names': 0
  }
}