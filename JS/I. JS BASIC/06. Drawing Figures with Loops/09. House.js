function house([arg1]){
    let n = Number(arg1);
    let starsCount = 1;

    if(n % 2 == 0){
        starsCount = 2;
    }

    for(let i = 0; i < Math.ceil(n / 2); i ++){
        console.log("-".repeat((n - starsCount) / 2) + "*".repeat(starsCount) + "-".repeat((n - starsCount) / 2));
        starsCount += 2;
    }

    for (let c = 0; c < Math.floor(n / 2); c++){
        console.log("|" + "*".repeat(n - 2) + "|");
    }
}