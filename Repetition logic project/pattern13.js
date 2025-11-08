// 1
// **
// 123
// ****
// 12345
for(i=1;i<=5;i++){
    temp=""
    for(j=1;j<=i;j++){
        if(i%2==0){
            temp+="*"
        }
        else{
            temp+=j
        }

    }
    console.log(temp);
    
}


