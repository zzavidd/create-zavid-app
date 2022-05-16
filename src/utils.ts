import { spawn } from 'child_process';
import fs from 'fs';

import { isProduction, CURRENT_WORKING_DIR } from './constants';

export function deleteFile(path: string): void {
  fs.rmSync(path, { recursive: true, force: true });
}

export function ensureProjectDirectory(): void {
  if (fs.existsSync(CURRENT_WORKING_DIR) && !isProduction) {
    deleteFile(CURRENT_WORKING_DIR);
  }
  fs.mkdirSync(CURRENT_WORKING_DIR, { recursive: true });
}

export function run(
  command: string,
  args: string[],
  cwd?: string,
): Promise<void> {
  return new Promise((resolve) => {
    const child = spawn(command, args, { cwd });

    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
    process.stdin.pipe(child.stdin);

    child.on('exit', () => {
      child.stdin.end();
      resolve();
    });
  });
}
