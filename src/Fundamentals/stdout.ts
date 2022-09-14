// writable stream to which programs should direct their output.

// direct data (buffer or string) to terminal
process.stdout.write('data', 'utf8', () => {
  // executed once the data is successfully written to stdout.
});
