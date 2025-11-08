// 0
// 11
// 000
// 1111
// 00000

for (i = 1; i <= 5; i++) {
    temp = ""

    for (j = 1; j <= i; j++) {
        if (i % 2 == 0) {
            temp += 1;
        }
        else {
            temp += 0;
        }
    }

    console.log(temp);


}