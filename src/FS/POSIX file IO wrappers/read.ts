import { stat, open } from 'fs/promises';
import { read } from 'fs';
import { fileURLToPath } from 'url';
import { promisify } from 'util';

const readPromised = promisify(read);

const __filename = fileURLToPath(import.meta.url);

const stats = await stat(__filename);

const { fd } = await open(__filename, 'r');

const bufferAllocated = Buffer.alloc(stats.size);

// read data from an open file
const { buffer, bytesRead } = await readPromised(fd, {
  buffer: bufferAllocated,
  offset: 0,
  length: bufferAllocated.length,
  position: null,
});

const data = buffer.toString('utf8');
console.log(data);
