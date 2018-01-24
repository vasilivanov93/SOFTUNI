function charityCampaign([arg1, arg2, arg3, arg4, arg5]){
    let numberDays = Number(arg1);
    let numberConfectioners = Number(arg2);
    let numberCake = Number(arg3);
    let numberWaffles = Number(arg4);
    let numberPancake = Number(arg5);

    let priceCake = numberCake * 45;
    let priceWaffles = numberWaffles * 5.80;
    let pricePancake = numberPancake * 3.20;

    let totalPrice = ((priceCake + priceWaffles + pricePancake) * numberConfectioners) * numberDays;
    let totalPriceAfterCost = totalPrice - (totalPrice * 0.125);

    console.log(totalPriceAfterCost.toFixed(2));
}