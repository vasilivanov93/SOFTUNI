function task(arr) {
    let priceTshirt = Number(arr[0]);
    let needTotalMoney = Number(arr[1]);

    let priceShorts = priceTshirt * 0.75;
    let priceSocks = priceShorts * 0.20;
    let priceShoes = (priceTshirt + priceShorts) * 2;

    let totalMoney = priceTshirt + priceShorts + priceShoes + priceSocks;
    totalMoney = totalMoney - (totalMoney *0.15);

    if (totalMoney >= needTotalMoney) {
        console.log(`Yes, he will earn the world-cup replica ball!
His sum is ${totalMoney.toFixed(2)} lv.
`);
    } else {
        console.log(`No, he will not earn the world-cup replica ball.
He needs ${(needTotalMoney - totalMoney).toFixed(2)} lv. more.
`);
    }
}

task(['55',
        '310'
    ]
);