// stdout is redirected to the file output.txt using the > operator.
// stderr, is printed in the terminal window

// node test.js > output.txt
// node test.js 1> output.txt

console.log('log');
console.error('error');

// node test.js 2> errors-file.log

// The 2 handle refers to the stderr; 1 is stdout; 0 is stdin
