// stdin
// receives data from the terminal window
// accept input from the user at runtime
// can receive its data from a file or another program.

// console.log('process.stdin: ' + process.stdin.constructor.name);

// unpausing the stdin stream
// prevents an application from terminating
// process.stdin.resume();

// allow the program to exit
// process.stdin.pause();

// process.stdin.setEncoding("utf8");
console.log('input is a TTY?:', process.stdin.isTTY);

// The arrival of new data on stdin triggers a data event
// process.stdin.once("data", function (data) {
// const response = data.toString();

//   console.log("You said your name is " + data);

//   process.stdin.pause();
// });

// readable event emitted when a chunk of data is ready to be read
process.stdin.on(/* listen for user input */ 'readable', function () {
  // binary representation of the input
  const data: Buffer = process.stdin.read();

  console.log('You said your name is ' + data.toString().trim().toUpperCase());

  process.stdin.pause();
});

console.log('What is your name?');

// activate the stdin stream
// Tell the stream we’re ready to start reading
process.stdin.resume();

process.on('SIGINT', () => {
  console.log('Over and Out!');
  process.exit(0);
});
