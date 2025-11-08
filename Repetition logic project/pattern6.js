// 0
// 01
// 010
// 0101
// 01010
for (i = 1; i <= 5; i++) {
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