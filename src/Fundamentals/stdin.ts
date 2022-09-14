// stdin
// receives data from the terminal window
// accept input from the user at runtime
// can receive its data from a file or another program.

console.log('process.stdin: ' + process.stdin.constructor.name);

// unpausing the stdin stream
// prevents an application from terminating
process.stdin.resume();

// allow the program to exit
process.stdin.pause();
