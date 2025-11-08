// ⁠WAP to Print sum of first and last digit of given number?
let number = 123;

let last = number % 10;         
let first = parseInt(number / 100); 

let sum = first + last;

console.log(sum); 
