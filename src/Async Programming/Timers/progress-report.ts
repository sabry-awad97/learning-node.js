const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

console.log(`setting a ${waitTime / 1000} second delay`);

const clearAndWrite = (text: string) => {
  /**
   * dir <number>
   *  -1: to the left from cursor
   *   1: to the right from cursor
   *   0: the entire line
   */
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);
  process.stdout.write(text);
};

const incTime = () => {
  currentTime += waitInterval;
  const p = Math.floor((currentTime / waitTime) * 100);
  clearAndWrite(`waiting ... ${p}%`);
};

const timerFinished = () => {
  clearInterval(interval);
  clearAndWrite('done');
};

const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);
