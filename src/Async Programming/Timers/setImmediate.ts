// Splitting Up Long-Running Tasks

// function compute() {
//   for (let i = 0; i < 3000000000; i++) {
//    // CPU intensive code
//   }
// }

// compute();

// console.log("Finished compute()");

let i = 0;
// allows other code to run while still adding iterations of compute() to the event loop.
function compute() {
  if (i < 1000000) {
    // CPU intensive code
    i++;

    // run in beginning of the next iteration of the event loop
    setImmediate(compute);
  }
}

compute();

console.log('compute() still working ...');
