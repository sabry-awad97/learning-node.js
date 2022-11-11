import { EventEmitter } from 'events';

let counter = 1;

// Instantiate an EventEmitter object - used to generate new events -
const emitter = new EventEmitter();

// 1- attach an event handler (listener) to an event
// return the EventEmitter instance to allow chaining
emitter.on('connection', data => {
  // used to trap the event and process it

  console.log('connection lisetner is executed ' + data);
});

// emitter.addListener("connection", data => {
//   console.log("connection listener is executed " + data);
// });

// 2- produce the actual event
// Event names are defined by calling .emit with the event name
// return the EventEmitter instance to allow chaining
emitter.emit('connection', counter++);
emitter.emit('connection', counter++);

// emitter.emit("error", new Error("Mistake"))
