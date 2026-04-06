function fetchUserData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve({name:"chai", url:"https://example.com/chai"});    
},3000);
    })
    ;}
   

    async function getUserData(){
        try{
           console.log("Fetching user data...");
          const userData = await fetchUserData()
          console.log("User data received:", userData);
        } catch(error){
            console.error("Error fetching user data:", error);
        }   

    }
    getUserData();