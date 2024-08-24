class Person {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }

  greeting() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  // Task 5: Static method that returns a generic greeting message
  static genericGreeting() {
      return "Hello! Welcome to the JavaScript world!";
  }
}

console.log(Person.genericGreeting());


class Student extends Person {
  // Task 6: Static property to keep track of the number of students
  static studentCount = 0;

  constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;

      Student.studentCount++;
      console.log(`New student created. Total students: ${Student.studentCount}`);
  }

  getStudentId() {
      return `Student ID: ${this.studentId}`;
  }

  // Override the greeting method to include the student ID
  greeting() {
      return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
  }
}

// Task 6: Creating instances of the Student class
const student1 = new Student('Farju', 16, 'CSE084');
const student2 = new Student('Suma', 20, '78689');
console.log(student1.greeting());
console.log(student2.greeting());

console.log(`Total students created: ${Student.studentCount}`); 
