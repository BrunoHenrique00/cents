module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', '*']
  },
  plugins: [
    'react',
    'react-native'
  ],
  root: true,
  rules: {
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/consistent-type-assertions": "off"
  }
}
