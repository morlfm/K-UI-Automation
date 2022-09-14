module.exports = {
  env: {
    node: true,
    es2021: true,
    commonjs: true,
  },
  extends: [],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'cypress',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    semi: [2, 'always'],
    indent: ['error', 2],
    'max-len': ['warn', {
      code: 120,
      tabWidth: 1,
      ignoreUrls: true,
      ignoreComments: false,
    }],
    camelcase: ['error', {
      ignoreImports: true,
    }],
    'no-multiple-empty-lines': ['error', {
      max: 1,
    }],
  },
};
