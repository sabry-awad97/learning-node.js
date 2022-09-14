// writable stream to which programs should direct their output.

// direct data (buffer or string) to terminal
// process.stdout.write('data', 'utf8', () => {
//   // executed once the data is successfully written to stdout.
// });

const { stdin, stdout } = process;

// Encoding for stream
stdin.setEncoding('utf8');

// readable event emitted when a chunk of data is ready to be read
stdin.on('readable', function () {
  // read the chunk in
  const input: string = stdin.read();

  if (input !== null) {
    // echo the text
    stdout.write(input.toUpperCase());

    stdin.resume();

    input.trim() === 'EXIT' && process.exit(0); // exit with success
  }
});
