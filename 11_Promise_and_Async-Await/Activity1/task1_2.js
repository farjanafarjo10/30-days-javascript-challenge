//Activity 1: Understanding Promises

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 1");
    }, 2000)
})

promiseOne
    .then((value) => {
        console.log(value);
    })


// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
const status = false;
const promiseTwo = new Promise(function (resolve, reject) {

    setTimeout(function () {
        if (status) {
            resolve('Task 2 done');
        } else {
            reject("Task 2 Failed");
        }
    }, 2000)
})

promiseTwo
    .then(function (value) {
        console.log(value);
    })
    .catch(function (err) {
        console.log(err);
    })