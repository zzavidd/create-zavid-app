#!/usr/bin/env node
import { Command } from 'commander';

import BootstrapWebpackProject from './webpack';

(async () => {
  const program = new Command();
  program
    .description('Bootstraps a TypeScript React.')
    .argument(
      '[toolchain]',
      'The toolchain to use. Either plain Webpack or Next.js.',
    )
    .option(
      '-s, --with-sass',
      'Generates files for all guests. Void if name is specified.',
      false,
    )
    .action(async (toolchain, options) => {
      if (toolchain === 'webpack') {
        await BootstrapWebpackProject();
      }
    });

  program.addHelpCommand(false);

  await program.parseAsync();
})();
