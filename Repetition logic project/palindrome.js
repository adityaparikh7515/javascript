// WAP to check given number is palindrome or not? 
let number = 121;
let temp = number;
let rev = 0;

for (temp; temp > 0; temp = parseInt(temp / 10)) {
    let digit = temp % 10;
    rev = rev * 10 + digit;
}

if (number === rev) {
    console.log("Palindrome Number");
} else {
    console.log("Not Palindrome");
}


