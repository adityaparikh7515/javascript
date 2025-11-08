// 0
// 01
// 010
// 1010
// 10101
for (i = 1; i <= 3; i++) {
    temp = ""
    for (j = 1; j <= i; j++) {
        if (j % 2 == 0) {
            temp += 1;
        } else {
            temp += 0;
        }
    }

    console.log(temp)
}
for (i = 4; i <= 5; i++) {
    temp = ""
    for (j = 1; j <= i; j++) {
        if (j % 2 == 0) {
            temp += 0
        } else {
            temp += 1;
        }
    }
    console.log(temp);
}

