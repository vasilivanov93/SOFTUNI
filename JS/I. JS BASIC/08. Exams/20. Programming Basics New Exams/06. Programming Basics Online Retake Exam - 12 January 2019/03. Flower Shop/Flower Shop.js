function task(arr) {
    let [chrysanthemums, roses, tulips, season, holiday] = arr;
    chrysanthemums = Number(chrysanthemums);
    roses = Number(roses);
    tulips = Number(tulips);

    let priceChrysanthemums = 0;
    let priceRoses = 0;
    let priceTulips = 0;
    if (season === 'Spring' || season === 'Summer') {
        priceChrysanthemums = 2;
        priceRoses = 4.10;
        priceTulips = 2.50;
    } else if (season === 'Autumn' || season === 'Winter') {
        priceChrysanthemums = 3.75;
        priceRoses = 4.50;
        priceTulips = 4.15;
    }

    if (holiday === 'Y') {
        priceChrysanthemums += priceChrysanthemums * 0.15;
        priceRoses += priceRoses * 0.15;
        priceTulips += priceTulips * 0.15;
    }

    let total = (chrysanthemums * priceChrysanthemums) + (roses * priceRoses) + (tulips * priceTulips);
    let totalFlowers = chrysanthemums + roses + tulips;

    if (tulips > 7 && season === 'Spring') {
        total *= 0.95;
    }

    if (roses >= 10 && season === 'Winter') {
        total *= 0.9;
    }

    if (totalFlowers > 20) {
        total *= 0.8;
    }

    console.log((total + 2).toFixed(2));
}

task([
    '10',
    '10',
    '10',
    'Autumn',
    'N'
    ]
);