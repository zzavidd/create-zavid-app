/**
 * @type {import('eslint').Linter.Config}
 */
 const eslintConfig = {
  extends: '@zzavidd/eslint-config/react-ts',
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['**/tsconfig.json'],
  },
};

module.exports = eslintConfig;