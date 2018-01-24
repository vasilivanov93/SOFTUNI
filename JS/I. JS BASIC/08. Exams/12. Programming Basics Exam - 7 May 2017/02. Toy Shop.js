function toyShop([arg1, arg2, arg3, arg4, arg5, arg6]) {
    let priceExcursion = parseFloat(arg1);
    let numberPuzzles = Number(arg2);
    let numberDolls = Number(arg3);
    let numberBears = Number(arg4);
    let numberMinions = Number(arg5);
    let numberTrucks = Number(arg6);

    let sum = (numberPuzzles * 2.60) + (numberDolls * 3) + (numberBears * 4.10) + (numberMinions * 8.20) + (numberTrucks * 2);
    let numberToys = numberPuzzles + numberDolls + numberBears + numberMinions + numberTrucks;


    if(numberToys >= 50){
        sum -= sum * 0.25;
    }

    let profit = sum  - (sum * 0.10);

    if(profit >= priceExcursion){
        console.log(`Yes! ${(profit - priceExcursion).toFixed(2)} lv left.`)       
    }else{
        console.log(`Not enough money! ${(priceExcursion - profit).toFixed(2)} lv needed.`)
    }
}