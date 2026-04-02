//Promises in javascript are used to handel asynchronous operations.
//A Promises is in one of these states:
//1. Pending: Initial state, neither fulfilled nor rejected.
//2. Fulfilled: The operation completed successfully.
//3. Rejected: The operation failed.    



function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           let success = true;
           if(success){
            resolve("Data fetched successfully!");
           } else{
            reject("Failed to fetch data.");        
           }
        }, 2000);
    });
}

let response = fetchData();
console.log(response); // Promise { <pending> }