import fs from 'fs/promises';

const oldPath = __dirname + '/new.txt';
const newPath = __dirname + '/bar.txt';

try {
  await fs.rename(oldPath, newPath);
  console.log('Successfully renamed the file!');
} catch (error: any) {
  console.error('rename error: ' + error.message);
}
