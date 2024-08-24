class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.
  // Getter for fullName
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  // Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.
  // Setter for fullName
  set fullName(name) {
    const [firstName, lastName] = name.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// Create an instance of Person
const person = new Person('Farjana', 'Akter');

// Log the full name using the getter
console.log(person.fullName); 

// Update the name using the setter
person.fullName = 'Anju man';

// Log the updated full name
console.log(person.fullName); 
