// #!/usr/bin/env node
// import fs from 'fs';

// import { NEXTJS_FILES_TO_DELETE, CURRENT_WORKING_DIR, BASE_CONFIG_DEPENDENCIES } from '../constants';
// import * as Utils from '../utils';

// const isProduction = process.env.NODE_ENV === 'production';

// const APP_NAME = 'code';
// const OUTPUT_APP_DIR = `${CURRENT_WORKING_DIR}/${APP_NAME}`;

// (async () => {
//   ensureProjectDirectory();
//   await installDependencies();
//   deleteUnwantedFiles();
// })();

// async function ensureProjectDirectory() {
//   if (fs.existsSync(CURRENT_WORKING_DIR) && !isProduction) {
//     Utils.deleteFile(CURRENT_WORKING_DIR);
//   }
//   fs.mkdirSync(CURRENT_WORKING_DIR);
// }

// async function installDependencies() {
//   await Utils.run('yarn', ['create', 'next-app', '--ts', OUTPUT_APP_DIR]);
//   await Utils.run('yarn', ['add', '-D', ...BASE_CONFIG_DEPENDENCIES], OUTPUT_APP_DIR);
//   await Utils.run('yarn', ['add', 'sass'], OUTPUT_APP_DIR);
// }

// function deleteUnwantedFiles() {
//   NEXTJS_FILES_TO_DELETE.forEach((filename) => {
//     try {
//       Utils.deleteFile(`${OUTPUT_APP_DIR}/${filename}`);
//     } catch (e: any) {
//       console.warn(e.toString());
//     }
//   });
// }
