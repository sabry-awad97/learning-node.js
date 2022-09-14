import { basename, dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const globals = { __filename: __filename, __dirname: dirname(__filename) };
console.log(globals);
