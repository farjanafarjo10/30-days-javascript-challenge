// Activity 1: Basic Error Handling with Try-Catch

// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function throwError() {
  throw new Error("This is an intentional error.");
}

try {
  throwError();
} catch (error) {
  console.error("Caught an error:", error.message);
}

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
function divideNumbers(num1, num2) {
  if (num2 === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return num1 / num2;
}

try {
  const result = divideNumbers(10, 0);
  console.log("Result:", result);
} catch (error) {
  console.error("Error:", error.message);
}
