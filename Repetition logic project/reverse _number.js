// WAP to print reverse number of given number? 
let number = 321;
let reverse = 0;
for (i = number; i > 0; i = parseInt(i / 10)) {
    reverse = reverse * 10 + (i % 10);

}
console.log(reverse);
