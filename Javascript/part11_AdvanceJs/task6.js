/* 6 - Iterators and Generators in JavaScript
Task 1: Creating a Simple Generator

Create a generator function numberGenerator() that yields numbers from 1 to 3.



Task 2: Create a Custom Iterator

Create a custom iterator called rangeIterator(start, end) that returns an object that iterates over numbers from start to end.

Each call to .next() should return the next number in the range until it reaches end. */

// =======================
// Task 1: Generator
// =======================

function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}


// =======================
// Task 2: Custom Iterator
// =======================

function rangeIterator(start, end) {
    let current = start;

    return {
        next: function () {
            if (current <= end) {
                return { value: current++, done: false };
            } else {
                return { value: undefined, done: true };
            }
        }
    };
}