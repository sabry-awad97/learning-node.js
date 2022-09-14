import { EventEmitter } from 'events';

const emitter = new EventEmitter();

emitter.on('customEvent', (message, user) => {
  console.log(`${user}: ${message}`);
});

process.stdin.on('data', data => {
  const input = data.toString().trim();
  if (input === 'exit') {
    emitter.emit('customEvent', 'Goodbye!', 'process');
    process.exit();
  }
  emitter.emit('customEvent', input, 'terminal');
});

// console.log(Buffer.from('1b5b304b', 'hex').toString());
