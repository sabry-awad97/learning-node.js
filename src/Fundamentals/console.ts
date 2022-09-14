// https://github.com/nodejs/node-v0.x-archive/blob/master/lib/console.js

//  console.log() is just a wrapper that calls stdout.write() under the hood

import { format } from 'util';

export class Logger {
  constructor(private stdout: NodeJS.WriteStream) {}

  printF(...args: any[]) {
    this.stdout.write(format(...args) + '\n');
  }

  log(...args: any[]) {
    this.printF(...args);
  }
}

// const logger = new Logger(process.stdout);

// logger.log("I love you");
