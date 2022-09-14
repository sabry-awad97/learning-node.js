import { appendFile } from 'fs';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const path = __dirname + '/new.txt';

appendFile(path, 'data to append', err => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
