// The setTimeout() function is used to schedule a one-time callback function
// to execute at some time in the future.

let timerFinished = () => {
  console.log('Hello from the past!');
};

setTimeout(timerFinished, 1000);

console.log('*** '.repeat(20));

class Bomb {
  message = 'Boom!';
  explode() {
    console.log(this.message);
  }
}

const bomb = new Bomb();

// Binding ensures that the code inside the method can
// access the object’s internal properties

timerFinished = bomb.explode.bind(bomb);
const timeoutIdentifier = setTimeout(timerFinished, 1000);

console.log('*** '.repeat(20));

// Defuse the bomb by calling clearTimeout to prevent bomb.expode from running.
clearTimeout(timeoutIdentifier);

export {};
