//You are given an array of numbers, and you need to perform the following tasks:

//1)Use the .filter() method to create a new array containing only the even numbers.

let arr=[12,55,63,20,14,15,8,4];
let even=arr.filter((a)=>a%2==0);
console.log(even);



//2)Use the .map() method to square each number in the filtered array and return the results

console.log(even.map((a)=>a**2));