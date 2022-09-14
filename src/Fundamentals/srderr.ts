// stderr
// used for displaying error and warning messages

// direct data (buffer or string) to terminal
process.stderr.write('data', 'utf8', () => {
  // executed once the data is successfully written to stdout.
});
