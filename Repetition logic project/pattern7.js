// 1
// 10
// 101
// 1010
// 10101
for (i = 1; i <= 5; i++) {
    temp = ""
    for (j = 1; j <= i; j++) {
        if (j % 2 == 0) {
            temp += 0;
        } else {
            temp += 1;
        }
    }
    console.log(temp)
}
