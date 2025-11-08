// 1
// 23
// 456
// 78910
// 1112131415
let count=1;
for(i=1;i<=5;i++){
    temp=""
    for(j=1;j<=i;j++){
        count++;
        temp+=count;
    }
    console.log(temp);
    
}