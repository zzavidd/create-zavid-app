/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: '@zzavidd/eslint-config/react-ts',
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  overrides: [
    {
      files: 'bp/**',
      parserOptions: undefined
    },
  ],
};
