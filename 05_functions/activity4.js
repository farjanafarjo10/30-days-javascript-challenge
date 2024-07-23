//Activity 4: Function Parameters and Default Values

//Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 2));
console.log(multiply(7));

//Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function person(name, age = 25) {
  return `Hello, ${name}! You are ${age} years old.`;
}

console.log(person("Farjana", 18));
console.log(person("Unkown"));       