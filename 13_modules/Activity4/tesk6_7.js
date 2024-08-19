// Activity 4: Using Third-Party Modules

// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
import _ from 'lodash';

const array = [1, 2, 3, 4, 5];
console.log(_.shuffle(array));


const str = "hello world";
const capitalStr = _.capitalize(str);

console.log(str);
console.log(capitalStr);


// • Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.

import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });