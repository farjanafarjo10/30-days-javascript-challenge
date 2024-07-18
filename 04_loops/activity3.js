//Activity 3: Do...While Loop

//Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);


//Task 6: Write a program to calculate the factorial of a number using a do...while loop.
// Assignment 5

let factorial = 1;
let x = 1;
do {
  factorial *= x;
  x++;
} while (x <= 5);

console.log(`The factorial of 5 is ${factorial}`);
