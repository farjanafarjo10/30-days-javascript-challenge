// Activity 3: Array Methods (Intermediate) & Assignment 2

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);

//Task 8: Use the filter method to create a new array with only even numbers and log the new array.
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

//Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); 