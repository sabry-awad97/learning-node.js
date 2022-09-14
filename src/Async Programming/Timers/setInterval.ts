// Running callbacks periodically with setInterval

let counter = 0;
const intervalId = setInterval(() => {
  if (counter > 50) {
    clearInterval(intervalId);
  }

  counter++;
  console.log(counter + ' hello');
}, 100);

console.log('*** '.repeat(20));

// Keeping a timer alive until the program cleanly exits

// A timer or interval that is the only item remaining in the event loop
// will prevent the program from terminating.

function monitor() {
  console.log(process.memoryUsage());
}

const id = setInterval(monitor, 1000);

// allows the program to exit if the timer/interval is
// the only item left in the event loop.
id.unref();

setTimeout(() => {
  console.log('Done!');
}, 5000);

// revert to the default behavior
// id.ref();
