function sumNumber(args){
    let n = Number(args[0]);

    let maxNumber = Number.NEGATIVE_INFINITY;

    for(let i = 1; i <= n; i++){
        let currentNumber = Number(args[i]);
        if(currentNumber >= maxNumber){
            maxNumber = currentNumber;
        }
    }

    console.log(maxNumber);
}