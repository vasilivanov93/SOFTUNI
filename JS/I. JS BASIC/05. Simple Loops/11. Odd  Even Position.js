function OddEvenPosition(args){
    let n = Number(args[0]);

    let oddSum = 0;
    let oddMin = Number.POSITIVE_INFINITY;
    let oddMax = Number.NEGATIVE_INFINITY;
    let evenSum = 0;
    let evenMin = Number.POSITIVE_INFINITY;
    let evenMax = Number.NEGATIVE_INFINITY;

    for(i = 1; i <= n; i++){
        let currentNumber = Number(args[i]);

        if(i % 2 == 0){
            evenSum += currentNumber;

            if(currentNumber >= evenMax){
                evenMax = currentNumber;
            }

            if(currentNumber <= evenMin){
                evenMin = currentNumber;
            }
        }else{
            oddSum += currentNumber;

            if(currentNumber >= oddMax){
                oddMax = currentNumber;
            }

            if(currentNumber <= oddMin){
                oddMin = currentNumber;
            }
        }   
    }

    if(n == 0){
        console.log(`OddSum=0,`);
        console.log(`OddMin=No,`);
        console.log(`OddMax=No,`);
        console.log(`EvenSum=0,`);
        console.log(`EvenMin=No,`);
        console.log(`EvenMax=No`);
    }else if((evenMin == Number.POSITIVE_INFINITY) || (evenMax == Number.NEGATIVE_INFINITY)){
        console.log(`OddSum=${oddSum},`);
        console.log(`OddMin=${oddMin},`);
        console.log(`OddMax=${oddMax},`);
        console.log(`EvenSum=${evenSum},`);
        console.log(`EvenMin=No,`);
        console.log(`EvenMax=No`);
    }else{
        console.log(`OddSum=${oddSum},`);
        console.log(`OddMin=${oddMin},`);
        console.log(`OddMax=${oddMax},`);
        console.log(`EvenSum=${evenSum},`);
        console.log(`EvenMin=${evenMin},`);
        console.log(`EvenMax=${evenMax}`);
    }
}