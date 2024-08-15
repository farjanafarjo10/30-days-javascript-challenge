// Activity 2: Chaining Promises

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

function fetchData(server, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Fetched data from ${server}`);
            resolve();
        }, delay);
    });
}

fetchData('Server 1', 1000)
    .then(() => fetchData('Server 2', 3500))
    .then(() => fetchData('Server 3', 4500))
    .then(() => fetchData('Server 4', 4800))
    .then(() => console.log('All data fetched'));

console.log();