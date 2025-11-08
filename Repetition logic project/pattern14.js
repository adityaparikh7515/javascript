// 54321
// 5432
// 543
// 54
// 5
for (i = 1; i <= 5; i++) {
    temp = ""
    for (j = 5; j >= i; j--) {
        temp += j;
    }

    console.log(temp)
}
