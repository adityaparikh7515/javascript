//     *
//    ***
//   *****
//  *******
// *********
for (i = 1; i <= 5; i++) {
    temp = ""
    for (k = 1; k <= 5 - i; k++) {
        temp += " "
    }
    for (j = 1; j <= i; j++) {
        temp += "*"
    }
    for (j = i - 1; j >= 1; j--) {
        temp += "*";
    }

    console.log(temp)
}
