#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

import { FilesToDelete, ZavidConfigDependencies } from './constants';
import { deleteFile, run } from './utils';

const isProduction = process.env.NODE_ENV === 'production';

const APP_NAME = 'code';
const OUTPUT_DIR = isProduction
  ? process.cwd()
  : path.join(__dirname, `../.out`);
const OUTPUT_APP_DIR = `${OUTPUT_DIR}/${APP_NAME}`;

(async () => {
  ensureProjectDirectory();
  await installDependencies();
  deleteUnwantedFiles();
})();

async function ensureProjectDirectory() {
  if (fs.existsSync(OUTPUT_DIR) && !isProduction) {
    deleteFile(OUTPUT_DIR);
  }
  fs.mkdirSync(OUTPUT_DIR);
}

async function installDependencies() {
  await run('npx', [
    'create-next-app@latest',
    '--ts',
    '--use-npm',
    OUTPUT_APP_DIR
  ]);
  await run('npm', ['i', '-D', ...ZavidConfigDependencies], OUTPUT_APP_DIR);
  await run('npm', ['i', 'sass'], OUTPUT_APP_DIR);
}

function deleteUnwantedFiles() {
  FilesToDelete.forEach((filename) => {
    try {
      deleteFile(`${OUTPUT_APP_DIR}/${filename}`);
    } catch (e: any) {
      console.warn(e.toString());
    }
  });
}
