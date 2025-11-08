//     1
//    121
//   12321
//  1234321
// 123454321
row = 5;
for (i = 1; i <= 5; i++) {
    temp = ""
    // temp1=""
    for (k = 1; k <= row - i; k++) {
        temp += " ";
    }
    for (j = 1; j <= i; j++) {
        temp += j;
        // 1
    }
    for (j = i - 1; j >= 1; j--) {
        temp += j;
    }
    console.log(temp);
    // console.log(temp1);
}

