import fs from 'fs/promises';
import { close } from 'fs';
import { promisify } from 'util';

const path = __dirname + '/data/foo.txt';

const _close = promisify(close);

try {
  const fh = await fs.open(path, 'a');
  await fs.appendFile(fh, 'data to append', 'utf8');
  await _close(fh.fd);
  // await fh.close();
} catch (error) {
  console.error(error);
}
