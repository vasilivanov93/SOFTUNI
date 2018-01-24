function fishland([arg1, arg2, arg3, arg4, arg5]){
    let priceMackerel = parseFloat(arg1);
    let priceSprat = parseFloat(arg2);
    let kgPalmwood = parseFloat(arg3);
    let kgScad = parseFloat(arg4);
    let kgMussels = Number(arg5);

    let sumPalmwood = (priceMackerel + (priceMackerel * 0.60)) * kgPalmwood;
    let sumScad = (priceSprat + (priceSprat * 0.80)) * kgScad;
    let sumMussels = parseFloat(kgMussels * 7.50);

    let totalSum = sumPalmwood + sumScad + sumMussels;
    console.log(totalSum.toFixed(2));
}