function flowerShop([arg1, arg2, arg3, arg4, arg5]){
    let numberMagnolia = Number(arg1);
    let numberHyacinths = Number(arg2);
    let numberRoses = Number(arg3);
    let numberCactus = Number(arg4);
    let priceGift = parseFloat(arg5);

    let sum = parseFloat((numberMagnolia * 3.25) + (numberHyacinths * 4) + (numberRoses * 3.50) + (numberCactus * 8));
    let tax = sum * 0.05;
    let profit = sum - tax;

    if(priceGift <= profit){
        console.log(`She is left with ${Math.floor(profit - priceGift)} leva.`)
    }else{
        console.log(`She will have to borrow ${Math.ceil(priceGift - profit)} leva.`)
    }
}