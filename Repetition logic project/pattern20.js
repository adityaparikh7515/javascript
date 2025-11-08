//     *
//    --
//   ***
//  ----
// *****
//  ----
//   ***
//    --
//     *

for (i = 1; i <= 5; i++) {
    temp = "";
    for (k = 1; k <= 5 - i; k++) {
        temp += " "
    }
    for (j = 1; j <= i; j++) {
        if (i % 2 == 0) {
            temp += "-"
        }
        else {
            temp += "*"
        }
    }
    console.log(temp)
}
for (i = 4; i >= 1; i--) {
    temp = "";
    for (k = 1; k <= 5 - i; k++) {
        temp += " "
    }
    for (j = 1; j <= i; j++) {
        if (i % 2 == 0) {
            temp += "-"
        }
        else {
            temp += "*"
        }
    }
    console.log(temp)
}



