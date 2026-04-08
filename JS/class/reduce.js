 // reduce() is used to reduce the array into a single value.

// array.reduce((accumulator, element) => {
//    return updatedValue;
// }, initialValue);
// Accumulator → stores result after each step

// Initial value → starting value

//Sum of Numbers
let arr = [1, 2, 3, 4];

let sum = arr.reduce((total, x) => total + x, 0);

console.log(sum);

//Multiply All Numbers
let nums = [2, 3, 4];

let product = nums.reduce((result, n) => result * n, 1);

console.log(product);