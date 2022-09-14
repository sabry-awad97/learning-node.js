import { stat } from 'fs/promises';
const path = './phoenix.png';

try {
  const stats = await stat(path);
  console.log(stats);
} catch (error: any) {
  console.error(error.toString());
}

// {
//   dev: 'ID of device containing file',
//   mode: "The file's protection",
//   nlink: 'Number of hard links',
//   uid: "User ID of the file's owner.",
//   gid: "Group ID of the file's owner",
//   rdev: 'Device ID (if special file)',
//   blksize: 'Block size for filesystem I/O',
//   ino: 'Inode number. An inode is a file system data structure that stores information about a file' /* */,
//   size: 'Total size, in bytes',
//   blocks: 'Number of 512B blocks allocated',
//   atime: 'Time of last access',
//   mtime: 'Time of last modification',
//   ctime: 'Time of last status change',
//   birthtime: 'Time of birth',
// };

// Methods

// isFile() ==> Indicates whether a file is a normal file.

// isDirectory() ==> Indicates whether a file is a directory.

// isBlockDevice() ==> Indicates whether a file is a block device file. This includes devices like hard disks,
// CD-ROMs, and flash drives.

// isCharacterDevice() ==> Indicates whether a file is a character device file. This includes devices like keyboards.

// isSymbolicLink() ==> Indicates whether a file is a symbolic link. This is valid only when using lstat() and
// lstatSync().

// isFIFO() ==> Indicates whether a file is a FIFO special file.

// isSocket() ==> Indicates whether a file is a socket.
