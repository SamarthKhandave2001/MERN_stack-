function fetchPostData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Post data fetched successfully!");
        },2000);
    });
}