import fs from 'fs/promises';
import path from 'path';

const files = await fs.readdir('./');

for (let file of files) {
  console.log(file);
  if (path.extname(file) == '.gz') {
    await fs.unlink('./' + file);
  }
}

const getFiles = async (path: string, files: string[]) => {
  (await fs.readdir(path)).forEach(async (file: string) => {
    const subpath = path + '/' + file;
    if ((await fs.lstat(subpath)).isDirectory()) {
      getFiles(subpath, files);
    } else {
      files.push(path + '/' + file);
    }
  });
};

getFiles(process.cwd(), files);
console.log(files); // will log all files in directory

// function readdir(currentPath, done, allFiles = [], i = 0) {
//     fs.readdir(currentPath, function (e, directoryFiles = []) {
//         if (!directoryFiles.length) return done(allFiles);
//         directoryFiles.map(function (file) {
//             const joinedPath = path.join(currentPath, file);
//             allFiles.push(joinedPath);
//             readdir(
//                 joinedPath,
//                 function () {
//                     i = i + 1;
//                     if (i == directoryFiles.length) done(allFiles);
//                 },
//                 allFiles
//             );
//         });
//     });
// }

// readdir(__dirname, console.log);

// var glob = require( 'glob' );

// glob( 'dirname/**/*.js', function( err, files ) {
//   console.log( files );
// });
