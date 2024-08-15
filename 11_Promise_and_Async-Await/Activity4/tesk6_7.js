//Activity 4: Fetching Data from an API

//  Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
let response = fetch('https://jsonplaceholder.org/users')

response.then((data)=>{
   if(!data.ok){
    throw new Error(data.statusText)
   } else {
    return data.json();
   }
}).then(data =>{
    console.log(data)
}).catch(err =>{
    console.error(err)
})


// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
let fetchData = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.org/users')
        if(!response.ok){
            throw new Error(response.statusText)
        } else {
            let resData = await response.json()
            console.log(resData,response.statusText)
            return resData
        }
    } catch(err) {
        console.log(err)
        return err
    }
 
}

fetchData()