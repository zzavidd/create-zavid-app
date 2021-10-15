import { spawn } from 'child_process';
import fs from 'fs';

export function deleteFile(path: string) {
  fs.rmSync(path, { recursive: true, force: true });
}

export function run(
  command: string,
  args: string[],
  cwd?: string
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
