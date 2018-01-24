function housePrice([arg1, arg2, arg3]){
    let areaSmallerstRoom = parseFloat(arg1);
    let areaKitchen = parseFloat(arg2);
    let pricePerM2 = parseFloat(arg3);

    let secondRoom = areaSmallerstRoom + (areaSmallerstRoom * 0.1);
    let thirdRomm = secondRoom + (secondRoom * 0.1);
    let bath = areaSmallerstRoom / 2;

    let totalArea = areaSmallerstRoom + areaKitchen + secondRoom + thirdRomm + bath;
    let totalAreaWithCoridor = totalArea + (totalArea * 0.05);
    let totalPrice = totalAreaWithCoridor * pricePerM2;

    console.log(totalPrice.toFixed(2));
}