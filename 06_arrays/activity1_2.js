//Activity 1: Array Creation and Access

//Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

//Task 2: Access the first and last elements of the array and log them to the console.
console.log(numbers[0]); 
console.log(numbers[numbers.length - 1]); 

// Activity 2: Array Methods (Basic) 
// Assignment 1

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
numbers.push(6);
console.log(numbers);

//Task 4: Use the pop method to remove the last element from the array and log the updated array.
numbers.pop();
console.log(numbers);

//Task 5: Use the shift method to remove the first element from the array and log the updated array.
numbers.shift();
console.log(numbers); 

//Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
numbers.unshift(1);
console.log(numbers);