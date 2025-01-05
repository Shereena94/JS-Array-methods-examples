//1) Check if all elements in an array are positive numbers.( using every () )


let array=[22,48,96,35,46,28,72];
console.log(array.every((a)=>a%2==0)?"all elements in the araay are positive":"not all elements in the array are positive");








//2) Check if there is at least one negative number in the array.( using some() )

let arr=[45,69,-2,85,-45,36,-42];
console.log(arr.some((a)=>a<0)?"arryay contains negative numbers":"array does not contain negative number")