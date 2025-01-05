//1. Write a function to check if all numbers in an array are positive using the every method.

let array=[12,10,45,63,85,14,12,10];
console.log(array.every((a)=>a>0)?"all elements are positive":"not all emenets are positive");


//2. Write another function to check if any number in the array is negative using the some method

console.log(array.some((a)=>a<0)?"found neg numbers":"not found neg numbers");