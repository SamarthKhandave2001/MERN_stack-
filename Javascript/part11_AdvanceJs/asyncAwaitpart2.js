function fetchPostData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Post data fetched successfully!");
        },2000);
    });
}



function fetchCommwentData() {
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Post data fetched successfully!");
        },3000);
    });
}

async function getBlogData(){
    try{
console.log("Fetching blog data...");
const blogData = await fetchPostData();
const commentData = await fetchCommwentData();
console.log(blogData);
console.log(commentData);
    }catch(error){
        console.error("Error fetching data:", error);
    }
}

getBlogData();