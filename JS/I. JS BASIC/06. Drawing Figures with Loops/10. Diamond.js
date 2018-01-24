function diamond([arg1]){
    let n = Number(arg1);
    let starsCount = 1;

    if(n % 2 == 0){
        starsCount = 2;
    }

    let middlePartSize = starsCount;
    
    for(let i = 0; i < Math.ceil(n / 2) - 1; i++){
        if(i == 0){
        console.log("-".repeat((n - starsCount) / 2 - i) + "*".repeat(starsCount) 
        + "-".repeat((n - starsCount) / 2 - i));
        }else{
            console.log("-".repeat((n - starsCount) / 2 - i) 
            + "*" + "-".repeat(middlePartSize + 2  * (i - 1)) + "*" + "-".repeat((n - starsCount) / 2 - i));
        }
    }
    
    for(let j = Math.ceil((n / 2)  - 1); j >= 0; j--){
        if(j == 0){
            console.log("-".repeat((n - starsCount) / 2 - j) 
            + "*".repeat(starsCount) + "-".repeat((n - starsCount) / 2 - j));
        }else{
            console.log("-".repeat((n - starsCount) / 2 - j) 
            + "*" + "-".repeat(middlePartSize + 2 * (j - 1)) + "*" + "-".repeat((n - starsCount) / 2 - j));
        }
    }
}