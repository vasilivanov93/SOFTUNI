function gameOfIntervals(args){
    let n = Number(args[0]);

    let count = 0;

    let counter1 = 0;
    let counter2 = 0;
    let counter3 = 0;
    let counter4 = 0;
    let counter5 = 0;
    let invalid = 0;

    for(let i = 1; i <= n; i++){
        let currentNumber = Number(args[i]);

        if(currentNumber >= 0 && currentNumber <= 9){
            count += currentNumber * 20 / 100;
            counter1++;
        }else if(currentNumber > 9 && currentNumber <= 19){
            count += currentNumber * 30 / 100;
            counter2++;
        }else if(currentNumber > 19 && currentNumber <= 29){
            count += currentNumber * 40 / 100;
            counter3++;
        }else if(currentNumber > 29 && currentNumber <= 39){
            count += 50;
            counter4++;
        }else if(currentNumber > 39 && currentNumber <= 50){
            count += 100;
            counter5++;
        }else if(currentNumber < 0 || currentNumber > 50){
            count = count / 2;
            invalid++;
        }
    }

    console.log(count.toFixed(2));
    console.log(`From 0 to 9: ${(counter1 / n * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(counter2 / n * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(counter3 / n * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(counter4 / n * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(counter5 / n * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(invalid / n * 100).toFixed(2)}%`);
}