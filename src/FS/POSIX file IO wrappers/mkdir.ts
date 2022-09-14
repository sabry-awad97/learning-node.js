import fs from 'fs/promises';
const path = __dirname + '/foo';

try {
  await fs.mkdir(path, { recursive: true });
  console.log('Successfully built ' + path);
} catch (error: any) {
  console.error('mkdir error: ' + error.message);
}
