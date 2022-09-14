import fs from 'fs/promises';
const path = __dirname + '/new.txt';
try {
  await fs.unlink(path);
} catch (error: any) {
  console.error('unlink error: ' + error.message);
}
