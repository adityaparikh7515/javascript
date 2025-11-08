// 1
// 00
// 111
// 0000
// 11111

for (i = 1; i <= 5; i++) {
    temp = ""

    for (j = 1; j <= i; j++) {
        if (i % 2 == 0) {
            temp += 0;
        }
        else {
            temp += 1;
        }
    }



    console.log(temp);


}