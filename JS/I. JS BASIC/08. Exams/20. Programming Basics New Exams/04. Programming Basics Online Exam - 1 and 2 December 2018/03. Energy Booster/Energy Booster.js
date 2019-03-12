function task(arr) {
    let [fruit, size, numberSets] = arr;
    numberSets = Number(numberSets);

    let priceWatermelon = 0;
    let priceMango = 0;
    let pricePineapple = 0;
    let priceRaspberry = 0;

    if (size === 'small') {
        priceWatermelon = 56 * 2;
        priceMango = 36.66 * 2;
        pricePineapple = 42.10 * 2;
        priceRaspberry = 20 * 2;
    } else if (size === 'big') {
        priceWatermelon = 28.70 * 5;
        priceMango = 19.60 * 5;
        pricePineapple = 24.80 * 5;
        priceRaspberry = 15.20 * 5;
    }

    let sum = 0;
    if (fruit === 'Watermelon') {
        sum = numberSets * priceWatermelon;
    } else if (fruit === 'Mango') {
        sum = numberSets * priceMango;
    } else if (fruit === 'Pineapple') {
        sum = numberSets * pricePineapple;
    } else if (fruit === 'Raspberry') {
        sum = numberSets * priceRaspberry;
    }

    if (sum >= 400 && sum <= 1000) {
        sum -= sum * 0.15;
    } else if (sum > 1000) {
        sum -= sum * 0.5;
    }

    console.log(`${sum.toFixed(2)} lv.`);
}

task([
        'Pineapple',
        'small',
        '1'
    ]
);