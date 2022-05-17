import path from 'path';

export const isProduction = process.env.MODE !== 'dev';

export const CZA_ROOT = path.join(__dirname, '..');
export const CURRENT_WORKING_DIR = isProduction
  ? process.cwd()
  : `${CZA_ROOT}/.out/app`;

export const WEBPACK_DEPENDENCIES = ['react', 'react-dom', 'styled-components'];
export const WEBPACK_DEV_DEPENDENCIES = [
  '@babel/core',
  '@babel/preset-env',
  '@babel/preset-react',
  '@babel/preset-typescript',
  '@types/node',
  '@types/react',
  '@types/react-dom',
  '@types/styled-components',
  'babel-loader',
  'html-webpack-plugin',
  'react-is',
  'ts-loader',
  'ts-node',
  'typescript',
  'webpack',
  'webpack-cli',
  'webpack-dev-server',
];

export const BASE_CONFIG_DEPENDENCIES = [
  '@zzavidd/eslint-config',
  '@zzavidd/prettier-config',
  'eslint',
  'prettier',
  '@typescript-eslint/eslint-plugin',
  '@typescript-eslint/parser',
  'eslint-plugin-import',
  'eslint-plugin-react',
  'eslint-plugin-react-hooks',
];

export const STYLELINT_CONFIG_DEPENDENCIES = [
  '@zzavidd/stylelint-config',
  'stylelint',
  'stylelint-config-sass-guidelines',
];

export const WEBPACK_BASE_FILES = [
  'src/app.tsx',
  'src/index.tsx',
  '.babelrc',
  'index.html',
  'tsconfig.json',
  'webpack.config.js',
];

export const WEBPACK_FILES_TO_DELETE = ['README.md', 'yarn.lock'];

export const NEXTJS_FILES_TO_DELETE = [
  'README.md',
  '.eslintrc.json',
  '.gitignore',
  'styles/Home.module.css',
];
