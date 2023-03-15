
import { choice, remove } from './helpers.js';
import { fruits } from './foods.js'

let fruit = choice(fruits);


console.log(`I'd like one ${fruit}, please`)

console.log(`Here you go: ${fruit}`)

remove(fruits, fruit);
let count = fruits.length;

console.log(`Delicious! May I have another?`)

console.log(`I'm sorry, we're all out. We have ${count} left.`)