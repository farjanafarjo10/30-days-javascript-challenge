//  If-Else Statements
// Task 1 & Assignment 1
let number = 5;

if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

// Task 2 & Assignment 2
let age = 20;

if (age >= 18) {
  console.log("The person is eligible to vote.");
} else {
  console.log("The person is not eligible to vote.");
}


// Nested If-Else Statements
// Task 3
let a = 10;
let b = 20;
let c = 30;

if (a > b) {
  if (a > c) {
    console.log("a is the largest."); // Output: c is the largest.
  } else {
    console.log("c is the largest.");
  }
} else {
  if (b > c) {
    console.log("b is the largest.");
  } else {
    console.log("c is the largest.");
  }
}
