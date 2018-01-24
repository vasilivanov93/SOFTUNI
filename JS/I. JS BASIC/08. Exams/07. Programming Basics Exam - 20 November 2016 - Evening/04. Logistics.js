function logistics(args){
    let n = Number(args[0]);

    let sum = 0;

    let sum3Tona = 0;
    let sum4To11Tona = 0;
    let sum12Tona = 0;

    for(let i = 1; i <= n; i++){
        let currentNumber = Number(args[i]);
        sum += currentNumber;

        if(currentNumber <= 3){
            sum3Tona += currentNumber;
        }else if(currentNumber > 3 && currentNumber <= 11){
            sum4To11Tona += currentNumber;
        }else if(currentNumber > 11){
            sum12Tona += currentNumber;
        }
    }

    let totalSum = ((sum3Tona * 200) + (sum4To11Tona * 175) + (sum12Tona * 120)) / sum ;
    console.log(totalSum.toFixed(2));

    let microBus = (sum3Tona / sum) * 100;
    let truck = (sum4To11Tona / sum) * 100;
    let train = (sum12Tona / sum) * 100;

    console.log(`${microBus.toFixed(2)}%`);
    console.log(`${truck.toFixed(2)}%`);
    console.log(`${train.toFixed(2)}%`);
}