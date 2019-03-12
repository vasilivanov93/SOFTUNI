function task(arr) {
    let nameSoccerFan = arr[0];
    let budget = Number(arr[1]);
    let numberBeer = Number(arr[2]);
    let numberChips = Number(arr[3]);

    let totalMoneyForBeer = numberBeer * 1.20;
    let pricePerOneChips = totalMoneyForBeer * 0.45;
    let totalMoneyForChips = Math.ceil(numberChips * pricePerOneChips);
    let totalMoney = totalMoneyForBeer + totalMoneyForChips;

    if (totalMoney <= budget) {
        console.log(`${nameSoccerFan} bought a snack and has ${(budget - totalMoney).toFixed(2)} leva left.`);
    } else {
        console.log(`${nameSoccerFan} needs ${(totalMoney - budget).toFixed(2)} more leva!`);
    }
}

task(['Valetin',
        '5',
        '2',
        '4'
    ]
);