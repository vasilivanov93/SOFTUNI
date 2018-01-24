function toyShop([arg1, arg2, arg3, arg4, arg5]) {
    let priceWiski = parseFloat(arg1);
    let quantityBeer = parseFloat(arg2);
    let quantityVine = parseFloat(arg3);
    let quantityRakia = parseFloat(arg4);
    let quantityWiski = parseFloat(arg5);

    let priceRakia = priceWiski / 2;
    let priceVine = priceRakia - (priceRakia * 0.4);
    let priceBeer = priceRakia - (priceRakia * 0.8);

    let totalSum = (priceRakia * quantityRakia) + (priceVine * quantityVine) + (priceBeer * quantityBeer) +(priceWiski * quantityWiski);

    console.log(totalSum.toFixed(2));
}