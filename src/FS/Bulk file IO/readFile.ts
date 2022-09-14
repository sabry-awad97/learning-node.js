// echo Hello World! > hello.txt

import { readFile } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

// load a file into memory
readFile(__filename, 'utf8', function (error, data) {
  if (error) {
    console.error('read error: ' + error.message);
  } else {
    console.log('File Contents:', data.toUpperCase());
  }
});

setInterval(() => process.stdout.write('**** \n'), 1).unref();
