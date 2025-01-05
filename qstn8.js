//1.count the number of Even numbers
let a=[1,2,3,4,5,6,7,8,9];
let count=0;
for(let elements of a){
    if(elements%2==0){
        count+=1;
    }
}console.log(count);






//2.filter number divisible by 3

let num=[2,3,14,15,27,33,45,48,63,99];
console.log(num.filter((a)=>a%3===0));