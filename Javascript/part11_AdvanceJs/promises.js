//Promises in javascript are used to handel asynchronous operations.
//



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