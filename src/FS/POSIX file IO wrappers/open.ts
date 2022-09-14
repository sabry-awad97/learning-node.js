import { open } from 'fs/promises';
const path = './phoenix.png';

try {
  const { fd } = await open(path, 'w+', 0o666);
  console.log('Successfully opened ' + path + ' with fd ', fd);
} catch (error: any) {
  console.error('open error: ' + error.message);
}

/* 
    File descriptors (FDs) are integers (indexes) associated with open files 
    within a process managed by the operating system. 
    As a process opens files, the operating system keeps track of these open files 
    by assigning each a unique integer that it can then use to look
    up more information about the file. 

    File descriptors can point to: 
      directories, pipes, network sockets, and regular files.
*/

// File System Flags

// 'r': Open file for reading. An exception occurs if the file does not exist.

// 'r+': Open file for reading and writing. An exception occurs if the file does not exist.

// 'w': Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
// 'wx': Similar to the w flag, but the file is opened in exclusive mode.
// Exclusive mode ensures that the file is newly created. (fails if the path exists.)

// 'w+': Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
// 'wx+': Similar to the w+ flag, but the file is opened in exclusive mode.

// 'a': Open file for appending. The file is created if it does not exist.
// 'ax': Like 'a' but fails if the path exists.

// 'a+': Open file for reading and appending. The file is created if it does not exist.
// 'ax+': Like 'a+' but fails if the path exists.
