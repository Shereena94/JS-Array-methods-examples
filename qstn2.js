//1.check if an array contains atleast one even number

let number=[13,15,19,16,12,45,99,93];
console.log(number.some((a)=>a%2==0)?"array contains even number":"not contains even number");




//2.find first even number in an array of interger

let num=[13,15,19,16,12,45,99,93];
let n=num.find((a)=>a%2==0);
console.log(n);