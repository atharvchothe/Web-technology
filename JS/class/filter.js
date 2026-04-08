// filter() is used to select elements from an array based on a condition.
// 👉 Only elements that satisfy the condition are kep

// Returns a new array
// Can reduce array size
// Condition must return true or false

// Numbers Greater Than 2
let arr = [1, 2, 3, 4, 5];
let result = arr.filter(x => x > 2);
console.log(result);

// Even Numbers
let numbers = [10, 15, 20, 25, 30];
let even = numbers.filter(num => num % 2 === 0);
console.log(even);

// | Method     | Purpose                       | Output                   |
// | ---------- | ----------------------------- | ------------------------ |
// | `map()`    | Modify every element          | New array (same size)    |
// | `filter()` | Select elements               | New array (smaller/same) |
// | `reduce()` | Convert array to single value | One value                |
