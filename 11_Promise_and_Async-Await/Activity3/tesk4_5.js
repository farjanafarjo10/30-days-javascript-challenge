// Activity 3: Using Async/Await 

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value. 
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 4 done");
    }, 2000)
})

async function promiseOneCall() {
    const res = await promiseOne
    console.log(res);
}
promiseOneCall()


// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
const status = false;
const promiseTwo = new Promise(function (resolve, reject) {

    setTimeout(function () {
        if (status) {
            resolve('Task 5 done');
        } else {
            reject("Task 5 Failed");
        }
    }, 2000)
})

async function promiseTwoCall() {
    try {
        const res = await promiseTwo
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

promiseTwoCall()