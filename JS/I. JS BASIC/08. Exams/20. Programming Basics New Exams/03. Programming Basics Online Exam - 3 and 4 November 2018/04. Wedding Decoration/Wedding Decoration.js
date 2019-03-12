function task(arr) {
    let budget = Number(arr.shift());

    let money = 0;
    let sumMoney = 0;
    let countBalloons = 0;
    let countFlowers = 0;
    let countCandles = 0;
    let countRibbon = 0;
    
    for (let i = 0; i < arr.length ; i += 2) {
        let decoration = arr[i];
        let count = Number(arr[i + 1]);

        if (decoration === 'stop') {
            console.log(`Spend money: ${sumMoney.toFixed(2)}
Money left: ${(budget).toFixed(2)}
Purchased decoration is ${countBalloons} balloons, ${countRibbon} m ribbon, ${countFlowers} flowers and ${countCandles} candles.
`);
            break;
        } else {
            if (decoration === 'balloons') {
                money = count * 0.10;
                countBalloons += count;
            } else if (decoration === 'flowers') {
                money = count * 1.50;
                countFlowers += count;
            } else if (decoration === 'candles') {
                money = count * 0.50;
                countCandles += count;
            } else if (decoration === 'ribbon') {
                money = count * 2;
                countRibbon += count;
            }
            sumMoney += money;
            budget -= money;

            if (budget <= 0) {
                console.log(`All money is spent!
Purchased decoration is ${countBalloons} balloons, ${countRibbon} m ribbon, ${countFlowers} flowers and ${countCandles} candles.
`);
            }
        }
    }
}

task([
        '365.50',
        'flowers',
        '15',
        'balloons',
        '10',
        'candles',
        '5',
        'ribbon',
        '6',
        'ribbon',
        '4',
        'balloons',
        '15',
        'candles',
        '9',
        'stop'
    ]
);