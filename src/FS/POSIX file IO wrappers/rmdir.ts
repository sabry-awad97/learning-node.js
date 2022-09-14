import fs from 'fs/promises';
const path = __dirname + '/new';
try {
  await fs.rmdir(path);
} catch (error: any) {
  console.error('rmdir error: ' + error.message);
}
