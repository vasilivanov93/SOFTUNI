function task(arr) {
    let priceBaklavaPerKg = Number(arr[0]);
    let priceMuffinPerKg = Number(arr[1]);
    let kgBowl = Number(arr[2]);
    let kgCandy = Number(arr[3]);
    let kgBiscuits = Number(arr[4]);

    let priceBowlPerKg = priceBaklavaPerKg + (priceBaklavaPerKg * 0.6);
    let priceBowl = priceBowlPerKg * kgBowl;

    let priceCandyPerKg = priceMuffinPerKg + (priceMuffinPerKg * 0.8);
    let priceCandy = priceCandyPerKg * kgCandy;

    let priceBiscuits = 7.50 * kgBiscuits;

    let totalMoney = priceBowl + priceCandy + priceBiscuits;

    console.log(totalMoney.toFixed(2));
}