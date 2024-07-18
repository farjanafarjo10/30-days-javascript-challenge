//Activity 4: Nested Loops

//Task 7: Write a program to print a pattern using nested for loops (right-angle triangle) :
// Assignment 3

for (let row = 1; row <= 5; row++) {
  let str = ''
  for (let col = 1; col <= row; col++) {
    str += "* "
  }
  console.log(str);
}