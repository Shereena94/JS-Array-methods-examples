//1) Check if any number is even in an array .

let arr=[2,6,9,17,19,11,45,14];
console.log(arr.some((a)=>a%2==0)?"even numbers found":"not found")




//2) Check if any number is odd in an array

console.log(arr.some((a)=>a%2!==0)?"odd numbers found":"odd numbers not found")