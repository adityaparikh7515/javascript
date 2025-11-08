// WAP to print sum of Digit of given number? 
let number = 768;
let sum = 0;

for (let i = number; i > 0; i = parseInt(i / 10)) {
    let digit = i % 10;
    sum += digit;
}

console.log(sum); // 21
