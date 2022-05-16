import {
  BASE_CONFIG_DEPENDENCIES,
  CURRENT_WORKING_DIR,
  WEBPACK_DEPENDENCIES,
  WEBPACK_DEV_DEPENDENCIES,
  WEBPACK_FILES_TO_DELETE,
} from '../constants';
import * as Utils from '../utils';
import path from 'path';

export default async function BootstrapWebpackProject(): Promise<void> {
  Utils.ensureProjectDirectory();
  await installDependencies();
}

async function installDependencies(): Promise<void> {
  try {
    await Utils.run('yarn', ['init', '--yes'], CURRENT_WORKING_DIR);
    await Utils.run('touch', ['yarn.lock'], CURRENT_WORKING_DIR);
    await Utils.run(
      'yarn',
      ['add', ...WEBPACK_DEPENDENCIES],
      CURRENT_WORKING_DIR,
    );
    await Utils.run(
      'yarn',
      ['add', '-D', ...WEBPACK_DEV_DEPENDENCIES, ...BASE_CONFIG_DEPENDENCIES],
      CURRENT_WORKING_DIR,
    );
    await Utils.run('cp', ['-r', path.resolve(__dirname, './config') + '/.', CURRENT_WORKING_DIR], __dirname);
    await Utils.run(
      'rm',
      ['-rf', ...WEBPACK_FILES_TO_DELETE],
      CURRENT_WORKING_DIR,
    );
  } catch (e) {
    throw new Error(e as string);
  }
}
