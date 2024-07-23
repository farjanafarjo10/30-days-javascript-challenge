//Activity 2: Function Expression

//Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

const findMax = function (a, b) {
  if (a > b) {
    console.log(`The maximum of ${a} and ${b} is ${a}`);
  } else {
    console.log(`The maximum of ${a} and ${b} is ${b}`);
  }
};

findMax(10, 20);
findMax(5, 3);


//Task 4: Write a function expression to concatenate two strings and return the result.
// Assignment 3

const concatenateStrings = function (str1, str2) {
  return str1 + str2;
};

console.log(concatenateStrings("Hello, ", "World!"));
console.log(concatenateStrings("JavaScript ", "Functions"))

