function tailoringWorkshop([arg1, arg2, arg3]){
    let numberRectangleTable = Number(arg1);
    let length = parseFloat(arg2);
    let width = parseFloat(arg3);

    let totalAreaTablecloths = numberRectangleTable * (length + (2 * 0.30)) * (width + (2 * 0.30));
    let totalAreaCare = numberRectangleTable * (length / 2) * (length / 2);

    let priceInDollar = (totalAreaTablecloths * 7) + (totalAreaCare * 9);
    let priceInLv = priceInDollar * 1.85;

    console.log(`${priceInDollar.toFixed(2)} USD`)
    console.log(`${priceInLv.toFixed(2)} BGN`)
}