function halfSumElement(args){
    let n = Number(args[0]);

    let sum = 0;
    let maxNumber = Number.NEGATIVE_INFINITY;
    let diff = 0;

    for(i = 1; i <= n; i++){
        let currentNumber = Number(args[i]);

        if(currentNumber >= maxNumber){
            maxNumber = currentNumber;
        }

        sum += currentNumber;
    }

    let sumSmaller = (sum  - maxNumber);

    if((sumSmaller) == maxNumber){
        console.log(`Yes sum = ${maxNumber}`)
    }else{
        diff = Math.abs(sumSmaller - maxNumber);
        console.log(`No diff = ${diff}`)
    }
    
}