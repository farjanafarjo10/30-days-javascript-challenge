//Activity 5: Higher-Order Functions

//Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
// Assignment 5
function repeatFunction(fn, times) {
  for (let i = 0; i < times; i++) {
    fn();
  }
}

function sayHello() {
  console.log("Hello!");
}

repeatFunction(sayHello, 3);


//Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function applyFunctions(fn1, fn2, value) {
  return fn2(fn1(value));
}

function double(num) {
  return num * 2;
}

function square(num) {
  return num * num;
}

console.log(applyFunctions(double, square, 5));
console.log(applyFunctions(square, double, 4));