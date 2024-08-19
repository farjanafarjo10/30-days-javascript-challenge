// Activity 1: Creating and Exporting Modules

// Task 1: Create a Module that Exports a Function to Add Two Numbers
import { add } from './task1module.js';

console.log(add(2, 3)); 


// Task 2: Create a Module that Exports an Object Representing a Person
import { person } from './task2module.js';

console.log(person.greet());
