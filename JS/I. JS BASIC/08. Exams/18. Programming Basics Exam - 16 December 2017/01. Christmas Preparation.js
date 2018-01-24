function christmasPreparation([arg1 ,arg2, arg3, arg4]) {
    let numberPaper = Number(arg1);
    let numberFabric = Number(arg2);
    let lGlue = parseFloat(arg3);
    let percentDiscount = Number(arg4);

    let pricePaper = numberPaper * 5.80;
    let priceFabric = numberFabric * 7.20;
    let priceGlue = lGlue * 1.20;

    let totalPrice = pricePaper + priceFabric + priceGlue;
    let priceWithDiscount = totalPrice - ((totalPrice * percentDiscount) / 100);

    console.log(priceWithDiscount.toFixed(3));
}

christmasPreparation(["2", "3", "2.5", "25"])