function oddEventSum(args){
    let n = Number(args[0]);

    let evenSum = 0;
    let oddSum = 0;

    let diff = 0;

    for(let i = 1; i <= n; i++){
        let currentNumber= Number(args[i]);

        if(i % 2 == 0){
            evenSum += currentNumber;
        }else{
            oddSum += currentNumber;
        }
    }

    if(evenSum == oddSum){
        console.log(`Yes, sum = ${evenSum}`)
    }else{
        diff = Math.abs(evenSum - oddSum)
        console.log(`No, diff = ${diff}`)
    }
}