import { format } from 'util';

const name = 'Sabry';
const age = 24;

const format1 = format('Hi, my name is %s', name);
const format2 = format('Hi, my name is %d', name);
const format3 = format('Hi, my name is %j', name);
const format4 = format('Hi, my name is %j', { name });
const format5 = format("I'm %s, and I'm %d years old", name, age);
const format6 = format("I'm %s, and I'm %i years old", name, age);
const format7 = format("I'm %s, and I'm %f years old", name, age);

const format8 = format(name, age);

console.log(format1);
console.log(format2);
console.log(format3);
console.log(format4);
console.log(format5);
console.log(format6);
console.log(format7);
console.log(format8);
