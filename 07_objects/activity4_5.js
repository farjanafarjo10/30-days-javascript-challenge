// Activity 4: The this Keyword

// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
let book = {
  title: "Javasript",
  author: "Farjana",
  year: 2020
};

book.getTitleAndYear = function() {
  return `Title of book is ${this.title} witch is published in ${this.year}`;
};

console.log(book.getTitleAndYear());

// Activity 5: Object Iteration

// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for (let key in book) {
  if (book.hasOwnProperty(key)) {
    console.log(`${key}: ${book[key]}`);
  }
}

//Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log(Object.keys(book));
console.log(Object.values(book));