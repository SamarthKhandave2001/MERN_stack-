/* Asynchronous JavaScript with Event Loop
Task 1: Simulating Asynchronous Behavior

Create a function simulateAsyncTask() that logs “Task started”, then after 2 seconds logs “Task finished”.

Use setTimeout to simulate this behaviour.



Task 2: Simulate Multiple Async Tasks with Different Delays

Create a function simulateMultipleTasks() that starts three asynchronous tasks with different delays (1 second, 2 seconds, and 3 seconds).

Each task should log "Task [n] finished" where [n] is the task number. Ensure the tasks run asynchronously.

Task 3: Async Task with Callback Function

Create a function fetchDataWithCallback(callback) that simulates fetching data asynchronously using setTimeout (after 2 seconds).

Once the data is “fetched”, it should invoke the provided callback function with "Fetched data" as an argument.

*/

// Task 1
function simulateAsyncTask() {
    console.log("Task started");

    setTimeout(() => {
        console.log("Task finished");
    }, 2000);
}

// Task 2
function simulateMultipleTasks() {
    console.log("Starting all tasks...");

    setTimeout(() => {
        console.log("Task 1 finished");
    }, 1000);

    setTimeout(() => {
        console.log("Task 2 finished");
    }, 2000);

    setTimeout(() => {
        console.log("Task 3 finished");
    }, 3000);
}

// Task 3
function fetchDataWithCallback(callback) {
    console.log("Fetching data...");

    setTimeout(() => {
        callback("Fetched data");
    }, 2000);
}

// Example callback
function handleData(data) {
    console.log("Received:", data);
}

// Function calls
simulateAsyncTask();
simulateMultipleTasks();
fetchDataWithCallback(handleData);

/* 2 - Closures in JavaScript
Task 1: Creating a Counter Using Closures

Create a function createCounter() that returns a function which increments and returns a counter value each time it is called.



Task 2: Rate Limiter Function

Create a function rateLimiter(fn, limit) that returns a new function. The returned function allows calling fn only once within a limit time in milliseconds. If it is called again before the limit is reached, it should return "Rate limit exceeded".



Task 3: Memoization Function

Write a function memoize(fn) that returns a memoized version of fn. The memoized function should cache the results of function calls, and return the cached result if the same inputs are provided again.*/

// =======================
// Task 1: Counter Closure
// =======================
function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}


// =======================
// Task 2: Rate Limiter
// =======================
function rateLimiter(fn, limit) {
    let lastCalled = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastCalled < limit) {
            return "Rate limit exceeded";
        }

        lastCalled = now;
        return fn.apply(this, args);
    };
}


// =======================
// Task 3: Memoization
// =======================
function memoize(fn) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.hasOwnProperty(key)) {
            return cache[key];
        }

        const result = fn.apply(this, args);
        cache[key] = result;

        return result;
    };
}


// =======================
// Example Usage (Optional)
// =======================

// Task 1 Test
const counter = createCounter();
console.log(counter()); // 1
