//Task 1: Declare a variable using "var", assign it a number, and log the value to the console.
var number=10
console.log(number);

//Task 2: Declare a variable using 'let', assign it a string, and log the value to the console.
let str="Hello"
console.log(str);

//Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const bool=true
console.log(bool)

//Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
let numberVar = 10;
let stringVar = "JavaScript";
let booleanVar = false;
let objectVar = { 
    name: "Farjana",
    age: 19 
    };
let arrayVar = [1, 2, 3, 4, 5];

console.log(typeof numberVar); 
console.log(typeof stringVar); 
console.log(typeof booleanVar); 
console.log(typeof objectVar); 
console.log(typeof arrayVar); // Output: object (arrays are a type of object)

// Task 5: Declare a variable using 'let', assign it an initial value, reassign a new value, and log both values to the console.
let reassignVar = "Initial Value";
console.log(reassignVar); // Output: Initial Value
reassignVar = "New Value";
console.log(reassignVar); // Output: New Value

//Task 6: Try reassigning a variable declared with const and observe the error.
const val1="Initial Value"
console.log(val1);
// val1="New Value"
// console.log(val1);  // TypeError: Assignment to constant variable.


// Write a script that declares variables of different data types and logs both the value and type of each variable to the console
let numberVar1 = 42;
let stringVar1 = "JavaScript";
let booleanVar1 = false;
let objectVar1 = { 
    name: "Farjana",
    age: 19 
    };
let arrayVar1 = [1, 2, 3, 4, 5];

console.log(`Value: ${numberVar1}, Type: ${typeof numberVar1}`); 
console.log(`Value: ${stringVar1}, Type: ${typeof stringVar1}`); 
console.log(`Value: ${booleanVar1}, Type: ${typeof booleanVar1}`); 
console.log(`Value: ${objectVar1}, Type: ${typeof objectVar1}`); 
console.log(`Value: ${arrayVar1}, Type: ${typeof arrayVar1}`); 
