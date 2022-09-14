// stderr
// used for displaying error and warning messages

// direct data (buffer or string) to terminal
// process.stderr.write('data', 'utf8', () => {
//   // executed once the data is successfully written to stdout.
// });

import { format } from 'util';

class Logger {
  constructor(private stderr: NodeJS.WriteStream) {}

  warn(...args: any[]) {
    this.stderr.write(format(...args) + '\n');
  }

  error(...args: any[]) {
    this.warn(...args);
  }
}

const logger = new Logger(process.stderr);

logger.warn('I love you');

// console.error();
// console.warn();

(function one() {
  (function two() {
    (function three() {
      // without error and without crash
      console.trace('test-trace');
    })();
  })();
})();
