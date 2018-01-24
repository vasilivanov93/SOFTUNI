function leftAndRightSum(args){
    let n = Number(args[0]);

    let sum1 = 0;
    let sum2 = 0;

    let diff = 0;

    for(let i = 1; i <= n; i++){
        let currentNumber = Number(args[i]);
        sum1 += currentNumber
    }

    for(let l = n + 1; l <= 2 * n; l++){
        let currentNumber = Number(args[l]);
        sum2 += currentNumber
    }

    if(sum1 == sum2){
        console.log(`Yes, sum = ${sum1}`)
    }else{
        diff = Math.abs(sum1 - sum2)
        console.log(`No, diff = ${diff}`)
    }
}