import path from 'path';
import {
  CURRENT_WORKING_DIR,
  BASE_CONFIG_DEPENDENCIES,
  WEBPACK_DEPENDENCIES,
  WEBPACK_DEV_DEPENDENCIES,
  WEBPACK_BASE_FILES,
} from '../constants';
import * as Utils from '../utils';

export default async function BootstrapWebpackProject(): Promise<void> {
  Utils.ensureProjectDirectory();
  await installDependencies();
}

async function installDependencies(): Promise<void> {
  await Utils.run('yarn', ['init', '--yes'], CURRENT_WORKING_DIR);
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
  await Utils.run('cp', ['-R', `./config/.`, CURRENT_WORKING_DIR], __dirname);
}
