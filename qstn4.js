//const numbers = [1, 2, 3, 4, 5, 6];    Filter even numbers,  double the numbers,  sum them up

const numbers = [1, 2, 3, 4, 5, 6]; 

//Filter even numbers
console.log(numbers.filter((a)=>a%2==0));

//double the numbers
let n=numbers.filter((a)=>a%2==0);
// console.log(n);
let double=n.map((a)=>a*2);
console.log(double);

//sum them up

let y=double.reduce((sum,a)=>sum+a,0);
console.log(y);
