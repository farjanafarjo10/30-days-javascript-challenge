// Task 1: Define the Person class
class Person {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }

  // Method to return a greeting message
  greeting() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  // Task 2: Method to update the age property and log the updated age
  updateAge(newAge) {
      this.age = newAge;
      console.log(`Updated age for ${this.name} is now ${this.age} years.`);
  }
}

const person1 = new Person('Farjana', 20);

// Log the greeting message
console.log(person1.greeting()); 

// Update the age and log the updated age
person1.updateAge(30); 

// Task 3: Define the Student class that extends Person
class Student extends Person {
  constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
  }

  getStudentId() {
      return `Student ID: ${this.studentId}`;
  }

  // Task 4: Override the greeting method to include the student ID
  greeting() {
      return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
  }
}

// Create an instance of the Student class
const student1 = new Student('Farju', 100, '4567');

// Log the student ID using the getStudentId method
console.log(student1.getStudentId()); 

// Log the overridden greeting message
console.log(student1.greeting());
