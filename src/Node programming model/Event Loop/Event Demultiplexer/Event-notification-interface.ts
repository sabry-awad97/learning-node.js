// @ts-nocheck

(() => {
  throw new Error('This file is not supposed to run!');
})();

const demultiplexer;

const pendingTimers = ['setTimeout', 'setInterval', 'setImmediate'];
const pendingOSTasks = [
  'netWorking',
  'Listening to port in our machine',
  'http module functions',
];

const pendingOperation = ['fs module functions'];

const watchList = [...pendingTimers, ...pendingOSTasks, ...pendingOperation];

let events = [];
let eventQueue = [];

while (
  (events = demultiplexer.watch(watchList)) /* blocking synchronous call */
) {
  demultiplexer.pushToEventQueue(eventQueue, ...events);
  // Event Loop will only run if there are events
  eventLoop: while (eventQueue.length) {
    // get the next event in the queue
    const event = eventQueue.shift();

    // read the data from the resource.
    let data;
    try {
      data = event.resource.poll();
    } catch (error) {
      reportError(error);
    }

    // Not Checking for NO_DATA_AVAIL because demultiplexer
    // will only return an event when it has some data
    if (data === 'RESOURCE_CLOSED') {
      demultiplexer.unwatch(event.resource);
      continue;
    }

    consumeData(data);
  }
}

function consumeData(_data: any) {
  // ....
}

function reportError(_err: unknown) {
  // ....
}

/*  So in short, busy waiting will waste CPU time for iterating over resources 
    which are not available most of the time, while with reactor pattern, 
    it would only iterate over available resources.
 */
