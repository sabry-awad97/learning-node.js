import { open } from 'fs/promises';
import { read, write, writeSync } from 'fs';
import { dirname } from 'path';
import { URL } from 'url';

import { fileURLToPath } from 'url';
import { promisify } from 'util';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const writePromised = promisify(write);
const readPromised = promisify(read);

const protocol = 'file://';

const fileUrl = new URL(protocol + __dirname + '/data/new.txt');

const data = 'Lorem ipsum dolor sit amet.';

try {
  const { fd } = await open(fileUrl, 'a+');
  const { bytesWritten } = await writePromised(fd, Buffer.from(data));

  console.log('Successfully wrote ' + bytesWritten + ' bytes.');

  const { buffer } = await readPromised(fd, {
    buffer: Buffer.alloc(bytesWritten),
    offset: 0,
    length: bytesWritten,
    position: 0,
  });

  console.log('Buffer: ' + buffer);
} catch (error: any) {
  console.error('Error: ' + error.message);
}
// writeSync(1, 'Logging to stdout\n')
