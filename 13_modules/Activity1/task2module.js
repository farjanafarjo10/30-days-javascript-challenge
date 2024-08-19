// task 2 module.js

export const person = {
    name: 'Farjana',
    age: 20,
    greet: function() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};

