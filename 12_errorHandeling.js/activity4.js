// Activity 4: Error Handling in Promises

// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
let randomPromiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    let randomValue = Math.random();
    console.log(randomValue);
    if (randomValue > 0.5) {
      resolve("Success");
    } else {
      reject("Failure");
    }
  }, 1000);
});

randomPromiseOne
  .then((result) => {
    console.log(`Random Promise One Resolved: ${result}`);
  })
  .catch((error) => {
    console.log(`Random Promise One Rejected: ${error}`);
  });


// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
let randomPromiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    let randomValue = Math.random();
    if (randomValue > 1) {
      resolve("Success");
    } else {
      reject("Failure");
    }
  }, 2000);
});

async function handleRandomPromise() {
  try {
    let result = await randomPromiseTwo;
    console.log(`Random Promise Two Resolved: ${result}`);
  } catch (error) {
    console.log(`Random Promise Two Rejected: ${error}`);
  }
}
handleRandomPromise();
