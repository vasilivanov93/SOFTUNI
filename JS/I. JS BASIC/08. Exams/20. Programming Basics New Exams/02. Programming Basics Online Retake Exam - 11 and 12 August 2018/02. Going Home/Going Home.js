function task(arr) {
    let km = Number(arr[0]);
    let gasolinePer100Km = Number(arr[1]);
    let priceGasolinePerLitre = Number(arr[2]);
    let money = Number(arr[3]);

    let litersGasoline = (km * gasolinePer100Km) / 100;
    let moneyGasoline = litersGasoline * priceGasolinePerLitre;
    let diff = money - moneyGasoline;

    if (diff >= 0) {
        console.log(`You can go home. ${diff.toFixed(2)} money left.`);
    } else {
        console.log(`Sorry, you cannot go home. Each will receive ${(money / 5).toFixed(2)} money.`);
    }
}

task([
        '120',
        '5',
        '1.2',
        '4'

    ]
);