// map() is used to transform every element of an array and create a new array.

//  It applies a function to each element.
/*array.map(function(element) {
   return newValue;
});*/

let arr = [1, 2, 3, 4];
let result = arr.map(x => x * 2);
console.log(result);

let names = ["ram", "shyam", "raj"];
let upperNames = names.map(name => name.toUpperCase());
console.log(upperNames);


