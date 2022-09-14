import { writeFile } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const path = __dirname + '/foo.txt';

writeFile(path, 'data', function (error) {
  if (error) {
    console.error('write error: ' + error.message);
  } else {
    console.log('Successfully wrote ' + path);
  }
});
