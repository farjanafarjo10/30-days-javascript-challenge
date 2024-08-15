// Activity 5: Concurrent Promises

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values. 
function fetchData(server, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Fetched data from ${server}`);
        }, delay);
    });
}

async function logAllResolvedValues() {
    try {
        const promises = [
            fetchData('Server 1', 1000),
            fetchData('Server 2', 2000),
            fetchData('Server 3', 1500),
            fetchData('Server 4', 500)
        ];
        const results = await Promise.all(promises);
        console.log(results);
    } catch (error) {
        console.error('Error:', error);
    }
}
logAllResolvedValues();


// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.

function fetchData(server, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Fetched data from ${server}`);
        }, delay);
    });
}

async function logFirstResolvedValue() {
    try {
        const promises = [
            fetchData('Server 1', 1000),
            fetchData('Server 2', 2000),
            fetchData('Server 3', 500),
            fetchData('Server 4', 1500)
        ];
        const firstResult = await Promise.race(promises);
        console.log(firstResult);
    } catch (error) {
        console.error('Error:', error);
    }
}
logFirstResolvedValue();