function smartLily([arg1, arg2, arg3]){
    let yearsLily = Number(arg1);
    let priceWashingmachine = parseFloat(arg2);
    let priceToys = Number(arg3);

    let toy = 0;
    let total1 = 0;
    let total2 = 0;
    let money = 0;

    for(let i = 1; i <= yearsLily; i++){
        if(i % 2 == 0){
            money += 10;
            total1 += money - 1;
        }else{
            toy++;
            total2 = toy * priceToys;
        }
    }

    let result = total1 + total2;

    if(result >= priceWashingmachine){
        console.log(`Yes! ${(result - priceWashingmachine).toFixed(2)}`);
    }else{
        console.log(`No! ${(priceWashingmachine - result).toFixed(2)}`);
    }
}