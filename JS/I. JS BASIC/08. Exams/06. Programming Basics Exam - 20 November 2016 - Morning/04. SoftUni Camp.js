function softUniCamp(args){
    let n = Number(args[0]);

    let counterCar = 0;
    let counterMikroBus = 0;
    let counterSmallBus = 0;
    let counterBigBus = 0;
    let counterTrain = 0;

    let totalSum = 0;

    let sumCar = 0;
    let sumMikroBus = 0;
    let sumSmallBus = 0;
    let sumBigBus = 0;
    let sumTrain = 0;

    for(let i = 1; i <= n; i++){
        let currentNumber = Number(args[i]);
        totalSum += currentNumber;

        if(currentNumber <= 5){
            sumCar += currentNumber;
            counterCar++; 
        }else if(currentNumber > 5 && currentNumber <= 12){
            sumMikroBus += currentNumber;
            counterMikroBus++;
        }else if(currentNumber > 12 && currentNumber <= 25){
            sumSmallBus += currentNumber;
            counterSmallBus++;
        }else if(currentNumber > 25 && currentNumber <= 40){
            sumBigBus += currentNumber;
            counterBigBus++;
        }else if(currentNumber > 40){
            sumTrain += currentNumber;
            counterTrain++;
        }
    }
    let percentCar = (sumCar / totalSum) * 100;
    let percentMicroBus = (sumMikroBus / totalSum) * 100;
    let percentSmallBus = (sumSmallBus / totalSum) * 100;
    let percentBigBus = (sumBigBus / totalSum) * 100;
    let percentTrain = (sumTrain / totalSum) * 100;

    console.log(`${percentCar.toFixed(2)}%`);
    console.log(`${percentMicroBus.toFixed(2)}%`);
    console.log(`${percentSmallBus.toFixed(2)}%`);
    console.log(`${percentBigBus.toFixed(2)}%`);
    console.log(`${percentTrain.toFixed(2)}%`);
}