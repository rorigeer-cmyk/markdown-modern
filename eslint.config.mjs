import antfu from '@antfu/eslint-config'
import markdownPreferences from 'eslint-plugin-markdown-preferences'

export default antfu({
  ignores: ['node_modules/**.*'],
  stylistic: true,
  type: 'lib',
  jsonc: true,
  vue: false,
  astro: false,
  yaml: true,
  unicorn: true,
  regexp: true,
  test: true,
}, markdownPreferences.configs.standard,  {
  rules: {
    'no-throw-literal': 'warn',
    'prefer-const': 'warn',
    'no-console': 'warn',
    'curly': ['error', 'all'],
    'style/brace-style': ['error', '1tbs'],
    'complexity': ['warn', 8],
    'node/prefer-global/buffer': ['error', 'always'],
    'node/prefer-global/process': ['error', 'always'],
    'unicorn/filename-case': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
})
