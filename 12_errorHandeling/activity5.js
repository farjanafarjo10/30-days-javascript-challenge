// Activity 5: Graceful Error Handling in Fetch

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
const apiURL = "https://invalid.url";
fetch(apiURL)
  .then((response) => {
    response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(`Error fetching data: ${error}`);
  });

  
// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
async function fetchData() {
  try {
    const response = await fetch("https://invalid.url");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`Error fetching data: ${error}`);
  }
}

fetchData();

