// Activity 2: Finally Block

// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

function riskyOperation() {
    try {
        console.log("Inside try block.");
        throw new Error("Something went wrong!");
    } catch (error) {
        console.error("Caught an error in catch block:", error.message);
    } finally {
        console.log("This is the finally block, it always runs.");
    }
}

riskyOperation();


