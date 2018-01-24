function vegetableExchange([arg1, arg2, arg3, arg4]){
    let pricePerKgVegetable = parseFloat(arg1);
    let pricePerKgFruit = parseFloat(arg2);
    let totalKgVegetable = Number(arg3);
    let totalKgFruit = Number(arg4);

    let totalPriceVegetable = pricePerKgVegetable * totalKgVegetable;
    let totalPriceFruit = pricePerKgFruit * totalKgFruit;

    let totalPriceInEuro = (totalPriceVegetable + totalPriceFruit) / 1.94;
    console.log(totalPriceInEuro);
}