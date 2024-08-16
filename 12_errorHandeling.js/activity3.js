// Activity 3: Custom Error Objects

// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function customErrorFunction() {
    throw new CustomError("This is a custom error.");
}

try {
    customErrorFunction();
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
}


// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

function validateUser(username) {
    try {
        if (username.trim() !== "" && typeof username == "string") {
            return "UserName Verified"
        } else {
            throw new Error("Invalid Username")
        }
    } catch (error) {
        return `Error: ${error}`
    }
}

console.log(validateUser("farjanafarjo10"))
console.log(validateUser(""))
console.log(validateUser(236745))