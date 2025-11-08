//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
//     *

for (i = 1; i <= 5; i++) {
    temp = ""
    for (k = 1; k <= 5 - i; k++) {
        temp += " "
    }
    for (j = 1; j <= i; j++) {
        temp += "*";
    }
    console.log(temp)

}
for (i = 1; i <= 4; i++) {
    temp = ""
    for (k = 1; k <= i; k++) {
        temp += " "
    }
    for (j = 4; j >= i; j--) {
        temp += "*"
    }

    console.log(temp)
}
