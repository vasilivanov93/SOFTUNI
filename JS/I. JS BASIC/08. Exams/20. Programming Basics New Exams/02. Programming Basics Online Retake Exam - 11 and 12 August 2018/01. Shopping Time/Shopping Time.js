function task(arr) {
    let timeForABreak = Number(arr[0]);
    let pricePeripheral = Number(arr[1]) * 3;
    let priceProgram = Number(arr[2]) * 2;
    let priceFrappe = Number(arr[3]);

    let timeForRelax = timeForABreak - 15;

    let totalMoney = pricePeripheral + priceProgram + priceFrappe;

    console.log(`${totalMoney.toFixed(2)}`);
    console.log(`${timeForRelax}`);
}

task(['20',
        '2.50',
        '1.20',
        '6.30'
    ]
);