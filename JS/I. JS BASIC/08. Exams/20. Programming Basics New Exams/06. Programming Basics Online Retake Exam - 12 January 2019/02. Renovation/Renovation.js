function task(arr) {
    arr = arr.map(Number);
    let [budget, width, length, sideTriangle, heightTriangle, priceTile, moneyForMaster] = arr;

    let areaFloor = width * length;
    let areaTile = (sideTriangle * heightTriangle) / 2;
    let needTile = Math.ceil(areaFloor / areaTile) + 5;
    let totalSum = needTile * priceTile + moneyForMaster;

    if (budget >= totalSum) {
        console.log(`${(budget - totalSum).toFixed(2)} lv left.`);
    } else {
        console.log(`You'll need ${(totalSum - budget).toFixed(2)} lv more.`);
    }
}

task([
        '1000',
        '5.55',
        '8.95',
        '0.90',
        '0.85',
        '13.99',
        '321'
    ]
);